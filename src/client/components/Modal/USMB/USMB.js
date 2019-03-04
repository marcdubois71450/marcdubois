import React, { Component } from 'react';


import './USMB.css';


export default class USMB extends Component {

  render() {
    return (
      <div className="modale-back-usmb">
        <div className="modale-title-usmb">
        Université Savoie Mont-Blanc
        </div>
        <div className="modale-diplome-usmb">
        <u>Diplôme :</u> License 3 TRI Télécommunications et Réseaux Informatiques
        </div>
        <div className="modale-lieu-usmb">
        <u>Lieu :</u> Le Bourget Du Lac - 73370
        </div>
        <div className="modale-projet-usmb">
        <u>Projet :</u> Interfaces Web d'administration de serveurs/équipements réseaux (NodeJS, ReactJS)
        </div>
      </div>
    );
  }
}
