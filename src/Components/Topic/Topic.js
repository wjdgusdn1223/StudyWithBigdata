import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Topic extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="Topic" style={{marginLeft: '10px', marginTop: '10px'}}>
        <Grid container direction='row' alignItems='center' spacing={16}>
          <Typography variant="title">
            {id} 위 -
          </Typography>
          <Button onClick={this._topicEvent}>
            {name}
          </Button>
        </Grid>
      </div>
    ); 
  }

  _topicEvent = () => {
    this.props.topicSearchEvent(this.props.name)
  }
}

export default Topic;
