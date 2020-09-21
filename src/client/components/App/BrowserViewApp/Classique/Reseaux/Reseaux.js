import React, { Component } from 'react';
import Instagram from './img/instagram.svg';
import Linkedin from './img/linkedin.svg';
import Github from './img/github.svg';
import Youtube from './img/youtube.svg';

import './Reseaux.css';

export default class Reseaux extends Component {
  render() {
    return (
      <div styleName="fullreseaux">
        <h2 styleName="title-reseaux">Mes Réseaux</h2>
        <div styleName="main-reseaux">
          <a href="https://www.instagram.com/marc20dubois/" target="_blank" rel="noopener" styleName="instagram"><img src={Instagram} alt="Instagram Logo"/></a>
          <a href="https://www.linkedin.com/in/marc-dubois-7a30b3137/" target="_blank" rel="noopener" styleName="linkedin"><img src={Linkedin} alt="Linkedin Logo"/></a>
          <a href="https://github.com/marcdubois71450" target="_blank" rel="noopener" styleName="github"><img src={Github} alt="Github Logo"/></a>
          <a href="https://www.youtube.com/channel/UCV5t2646kqVwV4GUBehc8qw" target="_blank" rel="noopener" styleName="youtube"><img src={Youtube} alt="Youtube Logo"/></a>
        </div>
    </div>
    );
  }
}
