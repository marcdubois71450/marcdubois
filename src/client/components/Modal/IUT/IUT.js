import React, { Component } from 'react';


import './IUT.css';


export default class IUT extends Component {

  render() {
    return (
      <div className="modale-back-iut">
        <div className="modale-title-iut">
        IUT Annecy
        </div>
        <div className="modale-diplome-iut">
        <u>Diplôme :</u> DUT R&T Réseaux et Télécommunication
        </div>
        <div className="modale-lieu-iut">
        <u>Lieu :</u> Annecy-Le-Vieux - 74940
        </div>
        <div className="modale-projet-iut">
        <u>Projet :</u> Sécurité des Réseaux Wi-Fi
        </div>
        <div className="modale-projet-iut">
        <u>Projet :</u> Site de E-Commerce (PHP, HTML, CSS, SQL)
        </div>
        <div className="modale-stage-iut">
        <u>Stage :</u> Trois mois, dévelopement (Trello, Figma, NodeJS, Electron, Webpack, ReactJS, Redux) (Projet : Superviseur)
        </div>
      </div>
    );
  }
}
