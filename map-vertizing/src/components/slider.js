import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import '../styles/slider.css'

class DynamicBounds extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        min: 0,
        max: 1000000,
        step: 10,
        value: 1,
      };
    }
    onSliderChange = (value) => {
      console.log(value);
      this.setState({value});
    }
    onMinChange = (e) => {
      this.setState({
        min: +e.target.value || 0,
      });
    }
    onMaxChange = (e) => {
      this.setState({
        max: +e.target.value || 100,
      });
    }
    onStepChange = (e) => {
      this.setState({
        step: +e.target.value || 1,
      });
    }
    render() {
      const labelStyle = { minWidth: '60px', display: 'inline-block' };
      const inputStyle = { marginBottom: '10px'};
      return (
        <div>
          <label style={labelStyle}>Min: </label>
          <input type="number" value={this.state.min} onChange={this.onMinChange} style={inputStyle} />
          <br />
          <label style={labelStyle}>Max: </label>
          <input type="number" value={this.state.max} onChange={this.onMaxChange} style={inputStyle} />
          <br />
          <label style={labelStyle}>Step: </label>
          <input type="number" value={this.state.step} onChange={this.onStepChange} style={inputStyle} />
          <br /><br />
          <label style={labelStyle}>Value: </label><span>{this.state.value}</span>
          <br /><br />
          <Slider value={this.state.value} min={this.state.min} max={this.state.max} step={this.state.step}
            onChange={this.onSliderChange}
          />
        </div>
      );
    }
  }


class TheSlider extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dataPoints: []
      }
    }
   
    render() {
      return (
        <div>
            <DynamicBounds />
        </div>
      );
    }
  }
   
  export default TheSlider;