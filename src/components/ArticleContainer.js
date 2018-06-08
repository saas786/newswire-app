import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleContainer = ({ articles, readLater, handleSaveArticleToReadLater, handleReadArticle }) => (
    <div className="article-container">
          <h2 className="news-wire-title">Latest Articles from the New York Times</h2>

        {articles.map((a, index) => {
            return (
              <ArticleItem article={a} key={index} id={parseInt(index)} handleSaveArticleToReadLater={handleSaveArticleToReadLater} handleReadArticle={handleReadArticle} articles={articles} readLater={readLater}/>
            );
        })
      }

    </div>
  );

export default ArticleContainer;
