import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h3>{article.title}</h3>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Article;
