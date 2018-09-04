import React, { Component } from 'react';
import Trend from './../Trend/Trend'
import RightSide from './../RightSide/RightSide'
import LeftSide from './../LeftSide/LeftSide'
import MainContent from './../MainContent/MainContent'

import Grid from '@material-ui/core/Grid';


class Content extends Component {

  render() {
    return (
      <div className="Content" style={{maxHeight: '90vh', height: '90vh'}}>
        <Grid container>
          <Grid item xs={1}>
            <LeftSide categoryEvent={this.props.categoryEvent} />
          </Grid>
          <Grid item xs={8}>
            <div className="Content-center">
              <MainContent 
                mod={this.props.mod} 
                keyword={this.props.keyword} 
                userKey={this.props.userKey}
              />
              <Trend 
                mod={this.props.mod} 
                keyword={this.props.keyword} 
                userKey={this.props.userKey}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <RightSide 
              mod={this.props.mod} 
              keyword={this.props.keyword} 
              userKey={this.props.userKey}
              topicSearchEvent={this.props.topicSearchEvent} 
            />
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default Content;
