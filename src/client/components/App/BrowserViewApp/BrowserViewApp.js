import React, { Component } from 'react';
import Classique from './Classique';
import Dev from './Dev';
import './BrowserViewApp.css';
import SettingSVG from './img/setting-icon.svg';



export default class BrowserViewApp extends Component {
  render() {
    return (
      <div>
        <div styleName="menu-hover">
          <div styleName="menu-top-right">
          <img src={SettingSVG} styleName="setting-icon" alt="Logo Setting" />

            <div>Parametre</div>
            <div>Mode Sombre</div>
            <div>Mode Devellopeur</div>
          </div>
        </div>
        <Classique />
        <Dev />
      </div>
    );
  }
}
