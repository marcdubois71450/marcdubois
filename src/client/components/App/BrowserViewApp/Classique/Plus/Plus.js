import React, { Component } from 'react';
import './Plus.css';

export default class Plus extends Component {
  render() {
    return (
      <div styleName="fullplus">
       <div styleName="plus">Site entièrement réalisé par Marc Dubois. | Télecharger la version <a styleName="pdf-link" href="pdf" target="_blank">PDF</a>.</div>
      </div>
    );
  }
}
