import React, { Component } from 'react';
import './Animateur.css';

export default class Animateur extends Component {
  render() {
    return (
      <div styleName="modale-back-animateur">
        <div styleName="modale-title-animateur">Animateur BAFA</div>
        <div styleName="modale-lieu-animateur"><u>Lieu :</u> Commune de Blanzy 71450 / Annecy 74000</div>
        <div styleName="modale-plus-animateur"><u>Les plus :</u> Travail d'équipe, responsabilité, communication, savoir s'adapter.</div>
      </div>
    );
  }
}
