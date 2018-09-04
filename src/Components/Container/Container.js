import React, { Component } from 'react';
import Header from './../Header/Header';
import Content from './../Content/Content';

import Grid from '@material-ui/core/Grid';

class Container extends Component {
  state = {
    userKey: '1248917020446657164',
    mod: '',
    keyword: ''
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: '#A1C181'}}>
        <Grid container>
          <Grid item xs={12}>
            <Header 
              searchEvent={this._searchEvent}
              keyword={this.state.keyword}
              mod={this.state.mod} 
            />
          </Grid>
          <Grid item xs={12}>
            <Content 
              userKey={this.state.userKey} 
              mod={this.state.mod} 
              keyword={this.state.keyword}
              categoryEvent={this._categoryEvent} 
              topicSearchEvent={this._topicSearchEvent}
            />
          </Grid>
        </Grid>
      </div>
    );
  }

  _searchEvent = (mod, keyword) => {
    this.setState({
      key: this.state.key,
      mod: mod,
      keyword: keyword
    })
  }

  _categoryEvent = (category) => {
    this.setState({
      key: this.state.key,
      mod: 'Category',
      keyword: category
    })

    console.log(category)
  }

  _topicSearchEvent = (name) => {
    this.setState({
      key: this.state.key,
      mod: 'Social',
      keyword: name
    })

    console.log(name)
  }
}

export default Container;
