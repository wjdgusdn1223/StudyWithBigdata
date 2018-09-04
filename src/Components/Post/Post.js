import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Post extends Component {
  state = {
    open: false
  }

  render() {
    const { title, date, content, image } = this.props;
    return (
      <div>
        <Paper style={{marginBottom: '10px', marginLeft: '5px', marginRight: '5px'}}>
          <Button onClick={() => {this.setState({open:true})}}>
            <Typography variant='title'>
              {date.substring(0,10) + ' _ ' + title}
            </Typography>
          </Button>
        </Paper>
        <Dialog
          open={this.state.open}
          onClose={this._handleClose}
          scroll='body'
          aria-labelledby="scroll-dialog-title"
          maxWidth='md'
          fullWidth={true}
        >
          <DialogTitle id="scroll-dialog-title">
            <Typography variant='Headline'>
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <img src={image} alt={title} width="100%" height="auto" />
            <DialogContentText>
              <Typography variant='subheading'>
                {content}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  _handleClose = () => {
    this.setState({
      open: false
    })
  }
}

export default Post;
