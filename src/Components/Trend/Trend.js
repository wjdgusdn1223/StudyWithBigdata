import React, { Component } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Trend extends Component {
  state = {}
  
  shouldComponentUpdate = (nextProps, nextState) => {
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props) &&
        nextProps.mod === "Social") {
      this._getData(nextProps)
    }
    else if(JSON.stringify(nextState) !== JSON.stringify(this.state) ||
              nextProps.mod !== "Social") {
      return true;
    }
    return false;  
  }

  render() {
    const { data } = this.state;
    const { mod } = this.props;
    return (
      <div className="Trend" id="Trend" style={{maxHeight: '20vh', paddingTop: '10px'}}>
        <Paper style={{height: '20vh', backgroundColor: '#E0E3DA'}}>
          <Grid 
            container
            alignItems='center'
            justify='center' 
          > 
            {data && mod === "Social" ? 
              <AreaChart 
                width={document.getElementById("Trend").getBoundingClientRect().width} 
                height={document.getElementById("Trend").getBoundingClientRect().height} 
                data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}
              >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="Time"/>
                <YAxis/>
                <Tooltip/>
                <Area type='monotone' dataKey='Count' stroke='#FE7F2D' fill='#3ac569' />
              </AreaChart> : 
              <Typography variant='display3' style={{marginTop: '6vh'}}>
                Loading..
              </Typography>
            }
          </Grid>
        </Paper>
      </div>
    );
  }

  _getData = async (nProps) => {
    const tmpData = await this._callApi(nProps)

    console.log(tmpData)

    const data = this._convertData(tmpData)

    console.log(data);

    this.setState({
      data
    })
  }

  _convertData = (tmpData) => {
    var data = []
    
    for(var i in tmpData) {
      tmpData[i].date = tmpData[i].date.substring(0,10)

      data.push({Time: tmpData[i].date, Count: tmpData[i].orgCount})
    }

    return data;
  }

  _callApi = (nProps) => {
    return fetch(
      'http://api.datamixi.com/datamixiApi/trend?timeunit=day&target=news&keyword=' + 
      nProps.keyword + 
      '&key=' + nProps.userKey)
    .then(data => data.json())
    .then(json => json.return_object.trend[0].data)
    .catch(err => console.log(err))
  }
}

export default Trend;
