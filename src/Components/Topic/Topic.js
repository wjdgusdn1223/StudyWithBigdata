import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Topic extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="Topic" style={{marginTop: '20px'}}>
        <Grid 
          container 
          direction='row' 
          alignItems='center' 
          spacing={16} 
          style={{marginLeft: '30px'}}
        >
          <Typography variant="display1">
            {id + ' - '}
          </Typography>
          <Button 
            onClick={this._topicEvent} 
            variant="extendedFab" 
            size='small' 
            style={{marginLeft: '10px', backgroundColor: '#fc9d9a'}}
          >
            <Typography variant="title">
              {name}
            </Typography>
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
