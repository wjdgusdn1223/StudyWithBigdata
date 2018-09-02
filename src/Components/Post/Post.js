import React from 'react';
import './Post.css';

function Post({title, date, image, uri, content}) {
    return (
      <div className="Post">
        <div className="Post-title">
          <h1>{title}</h1>
        </div>
        <div className="Post-date">
          {date}
        </div>
        <div className="Post-uri">
          <a href={uri}>{uri}</a>
        </div>
        {image ? <img src={image} alt={title} title={title} className="Post-image" /> : ""}
        <div className="Post-content">
          {content}
        </div>
      </div>
    );
}

export default Post;
