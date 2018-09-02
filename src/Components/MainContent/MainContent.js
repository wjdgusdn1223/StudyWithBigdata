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
  
  _renderData = () => {
    const data = this.state.data.map(datum => {
      return <Post
        title={datum.fields.title[0]}
        date={datum.fields.published_date[0]}
        uri={datum.fields.source_uri[0]}
        content={datum.fields.content[0]}
        image={datum.fields.images ? datum.fields.images[0] : false}
      />
    })

    return data;
  }

  render() {
      const { data } = this.state;
    return (
      <div className="MainContent">
        {data ? this._renderData() : "Loading"}
      </div>
    );
  }

  _getData = async (nProps) => {
    const tmpData = await this._callApi(nProps)
    
    console.log(tmpData)
    
    const data = this._getUnqObjArray(tmpData)

    console.log(data)

    this.setState({
      data
    })
  }

  _getUnqObjArray = (array) => {
    return array.filter((item) => {
      var dup = 0;

      for(var i in array) {
        if(item.fields.title[0] === array[i].fields.title[0] &&
            i < array.indexOf(item))
          dup++;
      }

      return (1 > dup);
    });
  }

  _callApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/search?count=30&target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .then(json => json.return_object[0].documents)
    .catch(err => console.log(err))
  }
}

export default MainContent;
