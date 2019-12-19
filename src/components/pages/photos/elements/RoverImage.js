import React, { Component } from 'react';
import '../PhotoPage.css';
import RoverImageButton from './RoverImageButton';

export default class RoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex() {
    this.setState(state => (
      {
        index: Math.min(state.index + 1, this.props.photoUrlArray.length - 1),
      }
    ));
  }

  decrementIndex() {
    this.setState(state => (
      {
        index: Math.max(0, state.index - 1),
      }
    ));
  }


  render() {
    return (
      <div className="rover-image">
        <RoverImageButton
          className="left-button"
          direction="<"
          onClick={() => this.decrementIndex()}
        />
        <img
          className="camera-capture"
          src={this.props.photoUrlArray[this.state.index]}
          alt="Mars"
        />
        <RoverImageButton
          className="right-button"
          direction=">"
          onClick={() => this.incrementIndex()}
        />
        <h4>Photo {this.state.index + 1} / {this.props.photoUrlArray.length}</h4>
      </div>
    );
  }
}
