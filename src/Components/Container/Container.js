import React, { Component } from 'react';
import './Container.css';
import Header from './../Header/Header';
import Content from './../Content/Content';

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Header urlSearch={this._urlSearch} />
        <Content />
      </div>
    );
  }

  //1248917020446657164
  _urlSearch = async (mod, key) => {
    const text = await this._callFilterApi();

    console.log(text)
  }

  _callFilterApi = (mod, keyword) => {

    return fetch('http://api.datamixi.com/datamixiApi/filter', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        key: '1248917020446657164',
        url: keyword
      }
    })
    .then(text => text.json())
    .catch(err => console.log(err))
  }
}

export default Container;
