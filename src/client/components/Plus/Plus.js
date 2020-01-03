import React, { Component } from 'react';
import './Plus.css';

export default class Plus extends Component {
  render() {
    return (
      <div className="fullplus">
       <div className="plus">Site entièrement réalisé par Marc Dubois. | Télecharger la version <a className="pdf-link" href="pdf" target="_blank">PDF</a>.</div>
      </div>
    );
  }
}
