import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Reseaux.css';

export default class Reseaux extends Component {
  render() {
    return (
      <div styleName="fullreseaux">
        <h2 styleName="title-reseaux">Mes Réseaux</h2>
        <div styleName="main-reseaux">
          <a href="https://www.instagram.com/marc20dubois/" target="_blank" styleName="instagram"></a>
          <a href="https://www.linkedin.com/in/marc-dubois-7a30b3137/" target="_blank" styleName="linkedin"></a>
          <a href="https://github.com/marcdubois71450" target="_blank" styleName="github"></a>
          <a href="https://www.youtube.com/channel/UCV5t2646kqVwV4GUBehc8qw" target="_blank" styleName="youtube"></a>
        </div>
    </div>
    );
  }
}
