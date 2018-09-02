import React, { Component } from 'react';
import './Container.css';
import Header from './../Header/Header';
import Content from './../Content/Content';

class Container extends Component {
  state = {
    userKey: '1248917020446657164',
    mod: '',
    keyword: ''
  }

  render() {
    return (
      <div className="Container">
        <Header 
          searchEvent={this._searchEvent}
          keyword={this.state.keyword}
        />
        <Content 
          userKey={this.state.userKey} 
          mod={this.state.mod} 
          keyword={this.state.keyword}
          categoryEvent={this._categoryEvent} 
          topicSearchEvent={this._topicSearchEvent}
        />
      </div>
    );
  }

  _searchEvent = (mod, keyword) => {
    this.setState({
      key: this.state.key,
      mod: mod,
      keyword: keyword
    })
  }

  _categoryEvent = (category) => {
    this.setState({
      key: this.state.key,
      mod: 'Category',
      keyword: category
    })

    console.log(category)
  }

  _topicSearchEvent = (name) => {
    this.setState({
      key: this.state.key,
      mod: 'Social',
      keyword: name
    })

    console.log(name)
  }
}

export default Container;
