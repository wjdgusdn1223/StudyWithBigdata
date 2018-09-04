import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import All from '@material-ui/icons/LanguageRounded';
import World from '@material-ui/icons/PublicRounded';
import Story from '@material-ui/icons/SatelliteRounded';
import Society from '@material-ui/icons/GroupRounded';
import It from '@material-ui/icons/SimCardRounded';
import Entertainment from '@material-ui/icons/FavoriteRounded';
import Economics from '@material-ui/icons/TrendingUpRounded';
import Politics from '@material-ui/icons/FaceRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

class LeftSide extends Component {
  render() {
    return (
      <Grid 
        container
        justify='center'
      >
        <Grid item xs={10}>
          <Grid 
            container
            direction='column'
            justify='space-evenly'
            alignItems='center'
            style={{height: '86vh'}}
          >
            <Tooltip title="All" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="All"
                id="all"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <All />
              </Button>
            </Tooltip>
            <Tooltip title="Story" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="Story" 
                id="story"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <Story />
              </Button>
            </Tooltip>
            <Tooltip title="Entertainment" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="Entertainment" 
                id="entertainment"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <Entertainment />
              </Button>
            </Tooltip>
            <Tooltip title="Politics" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="Politics" 
                id="politics"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <Politics />
              </Button>
            </Tooltip>
            <Tooltip title="Economics" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="Economics" 
                id="economics"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <Economics />
              </Button>
            </Tooltip>
            <Tooltip title="Society" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="Society" 
                id="society"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <Society />
              </Button>
            </Tooltip>
            <Tooltip title="It" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="It" 
                id="it"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <It />
              </Button>
            </Tooltip>
            <Tooltip title="World" placement="right"
              TransitionComponent={Zoom}>
              <Button 
                variant="fab" 
                aria-label="World" 
                id="world"
                onClick={this._clickEvent}
                style={{backgroundColor: '#9DC8C8'}}
              >
                <World />
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  _clickEvent = event => {
    this.props.categoryEvent(event.currentTarget.id.toString())
  }
}

export default LeftSide;
