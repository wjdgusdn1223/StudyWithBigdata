import React, { Component } from 'react';

import Topic from './../Topic/Topic'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class RightSide extends Component {
  state = {}

  shouldComponentUpdate = (nextProps, nextState) => {
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props) &&
        nextProps.mod === "Social") {
      this._getData(nextProps)
    }
    else if(JSON.stringify(nextState) !== JSON.stringify(this.state) ||
              nextProps.mod !== "Social") {
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
        key={datum.id}
      />
    })

    return data;
  }

  render() {
    const { data } = this.state;
    const { mod } = this.props;
    return (
      <div className="RightSide" id="RightSide">
        <Grid 
          container
          justify='center'
          alignItems='flex-start'
        >
          <Grid item xs={11}>
            <Paper 
              style={{
                margin: '10px', 
                height: '86vh',
                maxHeight: '86vh', 
                overflowY: 'auto', 
                overflowX: 'hidden',
                backgroundColor: '#FCCA46'
              }}
            >
              <Grid container direction='column'>
                <Typography 
                  variant="display1"
                  style={{margin: '10px'}} 
                >
                  Topic Rank
                </Typography>
                {data && mod === "Social" ? this._renderData() : ""}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
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
      'http://api.datamixi.com/datamixiApi/deeptopicrank?max=100&target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .then(json => json.return_object[0].nodes)
    .catch(err => console.log(err))
  }
}

export default RightSide;
