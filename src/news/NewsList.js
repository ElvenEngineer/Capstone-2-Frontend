import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

import SearchForm from "../common/searchForm";
import NewsApi from "../Api/api";
import NewsCard from "./NewsCard";



// import NewsCard from "./NewsCard";
// import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of news.
 *
 * On mount, loads news from API.
 * Re-loads filtered news on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { NewsCard, SearchForm }
 */

function NewsList(homePage) {
    console.debug("NewsList");

    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(15);
    const location = useLocation();
    const sentinelRef = useRef();


    useEffect(function getNewsOnMount() {
        console.debug("NewsList useEffect getNewsOnMount");

        const queryParams  = new URLSearchParams(location.search);
        const country = queryParams.get('country');
        const category = queryParams.get('cat');
        // search();    
        homePage(country, category);
    }, [location]);

    /** Triggered by search form submit; reloads news. */
    async function search(keyword) {
        let news = await NewsApi.getCurrentNews(keyword);
        setNews(news.articles);
        setVisibleCount(15);

    }

    async function homePage(country, category) {

        let news = await NewsApi.getTopNews(country, category);
        setNews(news.articles);
    }
    // if (!news) return <LoadingSpinner />

        // Intersection Observer to load more items
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setVisibleCount((prevCount) => prevCount + 20); // Load 20 more
            }
        }, {
            rootMargin: '100px', // Load more a bit before the sentinel comes into view
        });

        const currentSentinel = sentinelRef.current;
        if (currentSentinel) {
            observer.observe(currentSentinel);
        }

        return () => {
            if (currentSentinel) {
                observer.unobserve(currentSentinel);
            }
        };
    }, [news]);

    const filteredNews = news.filter(n => n.title !== "[Removed]" && n.urlToImage != null & n.content != null);

    return (
        <div className="NewsList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {filteredNews.length ? (
                <div className="NewsList-list row">
                    {filteredNews.slice(0, visibleCount).map((n, index) => (
                        <div className="col-md-4 d-flex align-items-stretch" key={n.url || index}>
                            <NewsCard
                                image={n.urlToImage}
                                title={n.title}
                                content={n.content}
                                id={n.id}
                                url={n.url}
                                description={n.description}
                                source={n.source.name}
                            />
                        </div>
                    ))}
                    {visibleCount < filteredNews.length && <div ref={sentinelRef} style={{ height: '20px', clear: 'both' }}></div>}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
        </div>
    );
    
}

export default NewsList;