import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Reseaux.css';

export default class Reseaux extends Component {
  render() {
    return (
      <div className="fullreseaux">
        <h2 className="title-reseaux">Mes Réseaux</h2>
        <div className="main-reseaux">
          <a href="https://www.instagram.com/marcdubois71/" target="_blank" className="instagram"></a>
          <a href="https://www.linkedin.com/in/marc-dubois-7a30b3137/" target="_blank" className="linkedin" target="_blank"></a>
          <a href="https://github.com/marcdubois71450" target="_blank" className="github"></a>
          <a href="https://www.youtube.com/channel/UCV5t2646kqVwV4GUBehc8qw" target="_blank" className="youtube"></a>
        </div>
    </div>
    );
  }
}
