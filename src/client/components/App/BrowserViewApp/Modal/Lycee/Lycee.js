import React, { Component } from 'react';
import './Lycee.css';

export default class Lycee extends Component {
  render() {
    return (
      <div styleName="modale-back-lycee">
        <div styleName="modale-title-lycee">Lycée Henri Parriat</div>
        <div styleName="modale-diplome-lycee"><u>Diplôme :</u> Bac SSI, Bac Scientifique Science de l'Ingenieur</div>
        <div styleName="modale-lieu-lycee"><u>Lieu :</u> Montceau-Les-Mines - 71300</div>
        <div styleName="modale-projet-lycee"><u>Projet :</u> Machine à cocktails automatisée (Arduino, HTML, CSS)</div>
      </div>
    );
  }
}
