import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Header extends Component {

  state = {
    error: false
  }

  theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  componentDidUpdate = () => {
    if(this.props.mod === "Social")
      document.getElementById("keyword").value = this.props.keyword
    else 
      document.getElementById("keyword").value = ""
  }

  render() {
    return (
      <div className="Header">
        <AppBar style={{height: '11vh', backgroundColor: '#233D4D'}} position='static'>
          <Grid 
            container 
            alignItems="center"
            justify="center"
          >
            <Grid item xs={4}>
            <MuiThemeProvider theme={this.theme}>
              <TextField
                id="keyword"
                className="Header-input"
                placeholder="ex) 삼성, LG, 빅데이터 (Korean recommended)"
                label="Search field"
                onKeyPress={this._enterKeyPress}
                fullWidth={true}
                autoFocus={true}
                margin='normal'
                autoComplete="off"
                disabled={this.state.error}
              />
            </MuiThemeProvider>
            </Grid>
            <Dialog
              open={this.state.error}
              TransitionComponent={Transition}
              keepMounted
              onClose={this._handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Empty field!!!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  You didn't enter anything. Please enter at least one character
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this._handleClose} color="primary">
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </AppBar>
      </div>
    );
  }

  _handleClose = () => {
    this.setState({ error: false });
  };

  /*enter keyを押した時実行*/
  _enterKeyPress = event => {
    if(event.charCode === 13)
    { 
      if(event.target.value === "") {
        this.setState({
          error: true
        })
      }
      else
        this._sendSearchEvent(event);
    }
  }

  /*イベントをparent componentに転送*/
  _sendSearchEvent = event => {
    var keyword = document.getElementById("keyword");

    this.props.searchEvent("Social", keyword.value)
  }
}

export default Header;
