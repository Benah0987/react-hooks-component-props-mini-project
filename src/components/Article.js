import React from 'react';

//Article child of ArticleList 
//  function component Article that displays an article with a title, date, and preview
// date defaults to "January 1, 1970" if not specified
const Article = ({title, date="January 1, 1970", preview}) => (
  <div>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
  </div>
);

export default Article;

