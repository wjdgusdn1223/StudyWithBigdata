import React, { Component } from 'react';
import './Container.css';
import Header from './../Header/Header';
import Content from './../Content/Content';

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Container;
