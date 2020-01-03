import React, { Component } from 'react';
import './Stage.css';

export default class Stage extends Component {
  render() {
    return (
      <div styleName="modale-back-stage">
        <div styleName="modale-title-stage">Stage DUT</div>
        <div styleName="modale-lieu-stage"><u>Lieu :</u> Montpellier - 34000</div>
        <div styleName="modale-entreprise-stage"><u>Entreprise :</u> Intactile DESIGN (<a href="http://intactile.com" target="_blank">Site Web</a>)</div>
        <div styleName="modale-projet-stage"><u>Projet :</u> Superviseur, interface de gestion des machines en réseaux. (Trello, Figma, NodeJS, Electron, Webpack, ReactJS, Redux)</div>
        <div styleName="modale-projet-stage"><u>Les plus :</u> Travail d'équipe (designer/développeur)</div>
      </div>
    );
  }
}
