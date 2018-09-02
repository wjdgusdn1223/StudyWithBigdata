import React from 'react';
import './TopicPost.css';

function TopicPost({title, date, image, uri, content}) {
  return (
    <div className="TopicPost">
      <div className="TopicPost-title">
        <h1>{title}</h1>
      </div>
      <div className="TopicPost-date">
        {date}
      </div>
      <div className="TopicPost-uri">
        <a href={uri}>{uri}</a>
      </div>
      {image ? <img src={image} alt={title} title={title} className="TopicPost-image" /> : ""}
      <div className="TopicPost-content">
        {content}
      </div>
    </div>
  );
}

export default TopicPost;
