import React, { useContext } from 'react';
import NewsContext from './NewsContext';

function NewsDetail() {
    const { currentNews } = useContext(NewsContext);
    const { title, content, image } = currentNews;

    return (
        <div className="NewsDetail col-md-8 offset-md-2">
            <h4>{title}</h4>
            <img src={image} alt={title} style={{ maxWidth: '50%' }} />
            <p>{content}</p>
        </div>
    );
}

export default NewsDetail;
