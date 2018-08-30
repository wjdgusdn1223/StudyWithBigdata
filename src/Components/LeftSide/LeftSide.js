import React, { Component } from 'react';
import './LeftSide.css';

class LeftSide extends Component {
  render() {
    return (
      <div className="LeftSide">
        <input type="button" value="all" onClick={this._clickEvent} />
        <input type="button" value="story" onClick={this._clickEvent} />
        <input type="button" value="entertainment" onClick={this._clickEvent} />
        <input type="button" value="politics" onClick={this._clickEvent} />
        <input type="button" value="economics" onClick={this._clickEvent} />
        <input type="button" value="society" onClick={this._clickEvent} />
        <input type="button" value="it" onClick={this._clickEvent} />
        <input type="button" value="world" onClick={this._clickEvent} />
      </div>
    );
  }

  _clickEvent = event => {
    this.props.categoryEvent(event.target.value)
  }
}



export default LeftSide;
