import React, { Component } from 'react';

export default class WindElement extends Component {
  render() {
    return (
      <div className="wind-element">
        <h2>Wind</h2>
        <h5>Avg: {this.props.wind.avg} m/s</h5>
        <h5>Max: {this.props.wind.max} m/s</h5>
        <h5>Min: {this.props.wind.min} m/s</h5>
        <h5>Dir: {this.props.wind.dir}</h5>
      </div>
    );
  }
}