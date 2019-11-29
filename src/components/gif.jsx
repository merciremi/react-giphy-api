import React, { Component } from 'react';

class Gif extends Component {
  getGifId = () => {
    this.props.getGifIdFunction(this.props.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.id !== nextProps.id;
  }

  render() {
    console.log( 'gif renders' + this.props.id)
    if(!this.props.id) { return null } // Gard clause to handle null values

    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.getGifId}/>
    );
  }
}

export default Gif;
