import React, { Component } from 'react';
import './Content.css';
import Trend from './../Trend/Trend'
import RightSide from './../RightSide/RightSide'
import LeftSide from './../LeftSide/LeftSide'
import MainContent from './../MainContent/MainContent'

class Content extends Component {

  render() {
    return (
      <div className="Content">
        <LeftSide categoryEvent={this.props.categoryEvent} />
        <div className="Content-center">
          <MainContent 
            mod={this.props.mod} 
            keyword={this.props.keyword} 
            userKey={this.props.userKey} 
          />
          <Trend 
            mod={this.props.mod} 
            keyword={this.props.keyword} 
            userKey={this.props.userKey} 
          />
        </div>
        <RightSide 
          mod={this.props.mod} 
          keyword={this.props.keyword} 
          userKey={this.props.userKey}
          topicSearchEvent={this.props.topicSearchEvent} 
        />
      </div>
    );
  }

}

export default Content;
