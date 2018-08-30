import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-center">
          <select defaultValue="Social" ref="Mod">
            <option value="Doc text">Doc text</option>
            <option value="HTML text">HTML text</option>
            <option value="Topic">Topic</option>
            <option value="Social">Social</option>
          </select>
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
    var mod = this.refs.Mod;
    var keyword = this.refs.Keyword;

    this.props.searchEvent(mod.value, keyword.value)
  }
}

export default Header;
