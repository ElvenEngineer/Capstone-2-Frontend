import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
// import NewsContext from './NewsContext'
import NewsContext from './NewsContext';
import NewsApi from "../Api/api";





import "./NewsCard.css";
import NewsDetail from "./NewsDetail";


// import "./CompanyCard.css";

/** Show limited information about news 
 * 
 * Is rendered by NewsList to show a "card" for each company.
 * 
 * NewsList -> NewsCard
*/


function NewsCard({ title, image, content, id, source, url, description }) {

    const { setCurrentNews } = useContext(NewsContext);

    // Encode the URL to use as a key in localStorage
    const localStorageKey = `isSaved_${encodeURIComponent(url)}`;
    let initialIsSaved = localStorage.getItem(localStorageKey) === 'True';
    const [isSaved, setIsSaved] = useState(initialIsSaved);


    let navigate = useNavigate();

    const handleClick = () => {
        setCurrentNews({ title, content, image });
        window.open(url)
    };

    const articleData = {
        title,
        url,
        image,
        content,
        description
    }

const handleReadLaterClick = async (e) => {
    e.stopPropagation(); 
    try {
        const token = localStorage.getItem('news-token');
        await NewsApi.addSavedNews(token, articleData);
        console.log(articleData)
        // Notify the user of success in a less disruptive way, if possible
        localStorage.setItem(localStorageKey, 'True')
        setIsSaved(true);
        alert('Added to Read Later');
    } catch (error) {
        console.error('Failed to add to Read Later:', error);
        // Notify the user of failure
        alert('Failed to add to Read Later. Please try again.');
    }
};

const handleDeleteClick = async (e) => {
    e.stopPropagation(); 
    try {
        const token = localStorage.getItem('news-token');
        await NewsApi.removeSavedNews(token, articleData);
        console.log(articleData)
        localStorage.setItem(localStorageKey, 'False')
        setIsSaved(false);
        // Notify the user of success in a less disruptive way, if possible
        alert('Added to Read Later');
    } catch (error) {
        console.error('Failed to add to Read Later:', error);
        // Notify the user of failure
        alert('Failed to add to Read Later. Please try again.');
    }
};
 

    return (
        
        <div className="NewsCard card" onClick={handleClick}>
            {/* <div className="card-body"> */}
                {/* <h6 className="card-title"> */}

                    <div className="image"><img src={image ? image : "https://reactnative.dev/img/logo-og.png"} alt="Description of the image" /></div>
                    <h6 className="card-title">{title}</h6>
                    <p className="card-title">{description}</p>
                    {/* <p className="card-title">{source}</p> */}
                    {/* <p className="card-url">{url}</p> */}
                    {isSaved ? (
                        <button onClick={handleDeleteClick} className="delete-btn">Remove Saved</button>
                        ) : (
                        <button onClick={handleReadLaterClick} className="read-later-btn">Read Later</button>
                    )}

                {/* </h6> */}

                {/* <p><small>{description}</small></p> */}
                
            {/* </div> */}
        </div>
    );
}

export default NewsCard;

