import React, { useState, useEffect, useRef } from "react";

import NewsApi from "../Api/api";
import SavedCard from "./SavedCard";

// import './SavedArticles.css';

function SavedArticles() {

    const [news, setNews] = useState([]);


//     // Fetch saved news on component mount
    useEffect(() => {
        async function fetchSavedNews() {
            try {
                const token = localStorage.getItem('news-token');
                let news = await NewsApi.getSavedNews(token); // Ensure this API call is defined and works as expected
                setNews(news.saved); // Adjust according to the actual structure of the response
            } catch (error) {
                console.error("Failed to fetch saved news:", error);
            }
        }
        fetchSavedNews();
    }, []);

    return (
        <div className="container">
          <div className="row">
            {news.map((article, index) => (
              // Removed the extra div that was wrapping each card.
              <div className="col-md-3" key={article.url || index}>
                <SavedCard
                  title={article.title}
                  content={article.content}
                  url={article.url}
                  image={article.urltoimage}
                  description={article.description}
                />
              </div>
            ))}
          </div>
        </div>
      );
      
    
}

export default SavedArticles;