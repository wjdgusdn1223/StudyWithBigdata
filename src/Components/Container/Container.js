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
        />
        <Content 
          userKey={this.state.userKey} 
          mod={this.state.mod} 
          keyword={this.state.keyword}
          categoryEvent={this._categoryEvent} 
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
      mod: 'category',
      keyword: category
    })

    console.log(category)
  }
}

export default Container;
