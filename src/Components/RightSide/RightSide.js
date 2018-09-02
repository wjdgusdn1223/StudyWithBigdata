import React, { Component } from 'react';
import './RightSide.css';

import Topic from './../Topic/Topic'

class RightSide extends Component {
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
  
  componentDidUpdate = () => {
    document.getElementById("RightSide").scrollTo(0,0)
  }

  _renderData = () => {
    const data = this.state.data.map(datum => {
      return <Topic
        id={datum.id}
        name={datum.name}
        topicSearchEvent={this.props.topicSearchEvent} 
      />
    })

    return data;
  }

  render() {
    const { data } = this.state;
    return (
      <div className="RightSide" id="RightSide">
        <h2>연관 Topic</h2>
        {data ? this._renderData() : "Loading"}
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
      'http://api.datamixi.com/datamixiApi/deeptopicrank?max=100&target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .then(json => json.return_object[0].nodes)
    .catch(err => console.log(err))
  }
}

export default RightSide;
