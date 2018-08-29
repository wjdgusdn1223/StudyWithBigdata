import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

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
          <input type="button" value="GO" onClick={this._modClassifier} />
        </div>
      </div>
    );
  }

  /*enter keyを押した時実行*/
  _enterKeyPress = event => {
    if(event.charCode === 13)
    {
      this._modClassifier();
    }
  }

  /*モードを利用して分類*/
  _modClassifier = () => {
    var mod = this.refs.Mod;
    var key = this.refs.Key;

    switch (mod.value)
    {
      case "Doc text":
        this.props.urlSearch(mod.value, key.value);
        break;
      case "HTML text":
        this.props.urlSearch(mod.value, key.value);
        break;
      case "Dataset":
        console.log("Dataset search mod");
        break;
      case "Topic":
        console.log("Topic search mod");
        break;
      case "Social":
        console.log("Social search mod");
        break;
      default:
        break;
    }
  }
}

export default Header;
