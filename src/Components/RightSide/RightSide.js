import React, { Component } from 'react';
import './RightSide.css';

class RightSide extends Component {
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
      <div className="RightSide">
        오른쪽 사이드
      </div>
    );
  }

  _callTrendApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/topictrend?target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(trend => trend.json())
    .catch(err => console.log(err))
  }
}

export default RightSide;
