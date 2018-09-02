import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="Topic">
        {id} 위 - <a onClick={this._topicEvent} className="topic">{name}</a>
      </div>
    ); 
  }

  _topicEvent = event => {
    this.props.topicSearchEvent(event.target.innerHTML)
  }
}

export default Topic;
