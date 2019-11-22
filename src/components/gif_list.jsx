import React, { Component } from 'react';

import Gif from './gif.jsx';


class GifList extends Component {
  getGifId = (id) => {
    this.props.selectGifFunction(id);
  }

  renderList = () => {
    // Implicit return with oneliner
    // return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} /> )

    // Explicit return
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} getGifIdFunction={this.getGifId}/>
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
