import React, { Component } from 'react';
import './MainContent.css';
import Post from './../Post/Post';

class MainContent extends Component {
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
      const data = this.state;
    return (
      <div className="MainContent">
        <Post data={data} />
      </div>
    );
  }

  _getData = async (nProps) => {
    const data = await this._callApi(nProps)
    
    console.log(data)

    this.setState({
      data
    })
  }

  _callApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/search?target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .then(json => json.return_object[0].documents)
    .catch(err => console.log(err))
  }
}

export default MainContent;
