import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  data = {}

  shouldComponentUpdate = async (nextProps, nextState) => {
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.data = await this._callTrendApi(nextProps)

      console.log(this.data)
      return true;
    }
    return false;  
  }
  
  render() {
    return (
      <div className="MainContent">
        메인 컨텐츠
      </div>
    );
  }

  _callTrendApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/search?target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(trend => trend.json())
    .catch(err => console.log(err))
  }
}

export default MainContent;
