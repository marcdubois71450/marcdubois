import React, { Component } from 'react';

import './Dev.css';


export default class BrowserViewApp extends Component {
  render() {
    return (
      <div>
          <div styleName="annecy">
            <div styleName="title">Marc Dubois</div>
            <div styleName="texte">This is Dev Mode.</div>
            <div styleName="info">?<div styleName="info2">Lac d'Annecy</div>
          </div>
         </div>
      </div>
    );
  }
}
