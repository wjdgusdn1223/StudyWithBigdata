import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  componentDidUpdate = () => {
    if(this.props.mod === "Social")
      this.refs.Keyword.value = this.props.keyword
    else 
      this.refs.Keyword.value = ""
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-center">
          <input  type="text" 
                  className="Header-center-input"
                  placeholder="search text..."
                  onKeyPress={this._enterKeyPress}
                  ref="Keyword"
                  required
          />
          <input type="button" value="GO" onClick={this._sendSearchEvent} />
        </div>
      </div>
    );
  }

  /*enter keyを押した時実行*/
  _enterKeyPress = event => {
    if(event.charCode === 13)
    {
      this._sendSearchEvent();
    }
  }

  /*イベントをparent componentに転送*/
  _sendSearchEvent = () => {
    var keyword = this.refs.Keyword;

    this.props.searchEvent("Social", keyword.value)
  }
}

export default Header;
