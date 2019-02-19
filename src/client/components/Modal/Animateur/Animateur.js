import React, { Component } from 'react';


import './Animateur.css';


export default class Animateur extends Component {

  render() {
    return (
      <div className="modale-back-animateur">
        <div className="modale-title-animateur">
        Animateur BAFA
        </div>
        <div className="modale-lieu-animateur">
        <u>Lieu :</u> Commune de Blanzy 71450
        </div>
        <div className="modale-plus-animateur">
        <u>Les plus :</u> Travaille d'équipe, responsabilité, communication, savoir s'adapter.
        </div>
      </div>
    );
  }
}
