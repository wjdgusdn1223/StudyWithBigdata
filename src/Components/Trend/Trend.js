import React, { Component } from 'react';
import './Trend.css';

class Trend extends Component {
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
      <div className="Trend">
        여기에 표시된다
      </div>
    );
  }

  _callTrendApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/trend?target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(trend => trend.json())
    .catch(err => console.log(err))
  }
}

export default Trend;
