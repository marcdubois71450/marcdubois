import React, { Component } from 'react';
import './IUT.css';

export default class IUT extends Component {
  render() {
    return (
      <div styleName="modale-back-iut">
        <div styleName="modale-title-iut">IUT Annecy</div>
        <div styleName="modale-diplome-iut"><u>Diplôme :</u> DUT R&T Réseaux et Télécommunication</div>
        <div styleName="modale-lieu-iut"><u>Lieu :</u> Annecy-Le-Vieux - 74940</div>
        <div styleName="modale-projet-iut"><u>Projet :</u> Sécurité des Réseaux Wi-Fi</div>
        <div styleName="modale-projet-iut"><u>Projet :</u> Site de E-Commerce (PHP, HTML, CSS, SQL)</div>
        <div styleName="modale-stage-iut"><u>Stage :</u> Trois mois, développement (Trello, Figma, NodeJS, Electron, Webpack, ReactJS, Redux)<br/>(Projet : Superviseur)</div>
      </div>
    );
  }
}
