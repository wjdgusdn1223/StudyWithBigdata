import React, { Component } from 'react';
import Post from './../Post/Post';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class MainContent extends Component {
  state = {}

  shouldComponentUpdate = (nextProps, nextState) => {
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this._getData(nextProps)
    }
    else if(JSON.stringify(nextState) !== JSON.stringify(this.state) ||
              nextProps.mod !== "Social") {
      return true;
    }
    return false;  
  }
  
  componentDidUpdate = () => {
    document.getElementById("MainContent").scrollTo(0,0)
  }

  _renderData = () => {
    if(this.props.mod === "Social") {
        return (
          <Grid 
            id="MainContent"
            item xs={12} 
            style={{
              marginTop: '10px',
              overflowY: 'auto', 
              overflowX: 'hidden'
            }}
          >
            {this.state.data.map(datum => (
              <Post
                title={datum.fields.title[0]}
                date={datum.fields.published_date[0]}
                uri={datum.fields.source_uri[0]}
                content={datum.fields.content[0]}
                image={datum.fields.images ? datum.fields.images[0] : false}
                key={datum.fields.title[0]}
              />
            ))}
          </Grid>
        )
    }
    else {
      return (
        <Grid 
          id="MainContent"
          item xs={12} 
          style={{
            marginTop: '10px',
            overflowY: 'auto', 
            overflowX: 'hidden'
          }}
        >
          {this.state.data.map(datum => (
            <Post
              title={datum.title}
              date={datum.date}
              uri={datum.orgUrl}
              content={datum.content}
              image={datum.selected_image ? datum.selected_image.url : false}
              key={datum.title}
            />
          ))}
        </Grid>
      )
    }
  }

  render() {
      const { data } = this.state;
    return (
      <div className="MainContent" style={{height: '66vh'}}>
        <Grid 
          container  
          style={{ 
            height: '66vh'
          }}
        >
          {data ? this._renderData() :
            <Grid 
              container
              alignItems='center'
              justify='center' 
            > 
              <Typography variant='display3'>
                Loading..
              </Typography>
            </Grid>
          }
        </Grid>
      </div>
    );
  }

  _getData = async (nProps) => {
    const tmpData = await this._callApi(nProps)
    
    const data = this._getUnqObjArray(tmpData)

    this.setState({
      data
    })
  }

  _getUnqObjArray = (array) => {
    return array.filter((item) => {
      var dup = 0;

      for(var i in array) {
        if(item.fields){
          if(item.fields.title[0] === array[i].fields.title[0] &&
              i < array.indexOf(item))
            dup++;
        }
        else {
          if(item.title === array[i].title &&
            i < array.indexOf(item))
          dup++;
        }
      }

      return (1 > dup);
    });
  }

  _callApi = (nProps) => {
    if(nProps.mod === "Social") {
      return fetch(
        'http://api.datamixi.com/datamixiApi/search?count=30&target=news&keyword=' + 
        nProps.keyword + 
        '&key=' + nProps.userKey)
      .then(data => data.json())
      .then(json => json.return_object[0].documents)
      .catch(err => console.log(err))
    }
    else {
      return fetch(
        'http://api.datamixi.com/datamixiApi/topictoday?count=30&category=' + 
        nProps.keyword + 
        '&key=' + nProps.userKey)
      .then(data => data.json())
      .then(json => json.document)
      .catch(err => console.log(err))
    }
  }
}

export default MainContent;
