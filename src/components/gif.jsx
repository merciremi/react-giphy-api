import React, { Component } from 'react';

class Gif extends Component {
  getGifId = () => {
    this.props.getGifIdFunction(this.props.id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.getGifId}/>
    );
  }
}

export default Gif;
