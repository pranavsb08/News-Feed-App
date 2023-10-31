import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://lmdb-kv-store.shuttleapp.rs/keys')
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>News Feed</h1>
      <ul className="list-group">
        {news.map((article, index) => (
          <li key={index} className="list-group-item">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Published at: {article.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
