import React, { Component } from 'react';
import './Trend.css';

class Trend extends Component {
  state = {}

  shouldComponentUpdate = (nextProps, nextState) => {
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this._getData(nextProps)
    }
    else if(JSON.stringify(nextState) !== JSON.stringify(this.state)) {
      return true;
    }
    return false;  
  }
  
  render() {
    return (
      <div className="Trend">
        
      </div>
    );
  }

  _getData = async (nProps) => {
    const data = await this._callApi(nProps)

    this.setState({
      data
    })
  }

  _callApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/trend?target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .catch(err => console.log(err))
  }
}

export default Trend;
