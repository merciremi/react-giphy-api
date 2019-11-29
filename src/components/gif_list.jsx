import React, { Component } from 'react';

import Gif from './gif.jsx';

// Destructuring

class GifList extends Component {
  getGifId = (id) => {
    this.props.selectGifFunction(id);
  }

  renderList = () => {
    // Implicit return with oneliner
    // return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} /> )

    // Explicit return with destructuring of parameters gifs and id
    // Instead of calling (gif) in map, I call directly the key I'm interested in, thus I can get get rid of gif.id and replace it with id
    // If i have several keys, i can just do const { bob, bill } = this.props;
    const { gifs } = this.props;

    return gifs.map(({ id }) => {
      return <Gif id={id} key={id} getGifIdFunction={this.getGifId}/>
    })
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
