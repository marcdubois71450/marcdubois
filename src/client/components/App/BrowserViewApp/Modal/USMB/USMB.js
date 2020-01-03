import React, { Component } from 'react';
import './USMB.css';

export default class USMB extends Component {
  render() {
    return (
      <div styleName="modale-back-usmb">
        <div styleName="modale-title-usmb">Université Savoie Mont-Blanc</div>
        <div styleName="modale-diplome-usmb"><u>Diplôme :</u> Licence 3 TRI Télécommunications et Réseaux Informatiques</div>
        <div styleName="modale-lieu-usmb"><u>Lieu :</u> Le Bourget Du Lac - 73370</div>
        <div styleName="modale-projet-usmb"><u>Projet :</u> Interfaces Web d'administration de serveurs/équipements réseaux (NodeJS, ReactJS)</div>
      </div>
    );
  }
}
