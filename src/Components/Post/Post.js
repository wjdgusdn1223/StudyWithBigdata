import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    const { data } = this.props.data;
    return (
      <div className="Post">
    {data ? (data.length !== 0 ? (<h2>{data[0].fields.title[0]}</h2>) : "") : ""}
      </div>
    );
  }

}

export default Post;
