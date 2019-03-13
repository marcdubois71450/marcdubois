import React, { Component } from 'react';
import './Lycee.css';

export default class Lycee extends Component {
  render() {
    return (
      <div className="modale-back-lycee">
        <div className="modale-title-lycee">Lycée Henri Parriat</div>
        <div className="modale-diplome-lycee"><u>Diplôme :</u> Bac SSI, Bac Scientifique Science de l'Ingenieur</div>
        <div className="modale-lieu-lycee"><u>Lieu :</u> Montceau-Les-Mines - 71300</div>
        <div className="modale-projet-lycee"><u>Projet :</u> Machine à cocktails automatisée (Arduino, HTML, CSS)</div>
      </div>
    );
  }
}
