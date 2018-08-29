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
            <option value="Dataset">Dataset</option>
            <option value="Topic">Topic</option>
            <option value="Social">Social</option>
          </select>
          <input  type="text" 
                  className="Header-center-input"
                  placeholder="search text..."
                  onKeyPress={this._enterKeyPress}
                  ref="Key"
                  required
          />
          <input type="button" value="GO" onClick={this._search} />
        </div>
      </div>
    );
  }

  _enterKeyPress = event => {
    if(event.charCode === 13)
    {
      this._search();
    }
  }

  _search = () => {
    var key = this.refs.Key;
    var mod = this.refs.Mod;

    console.log(mod.value + " : " + key.value + " search complete!");
  }
}

export default Header;
