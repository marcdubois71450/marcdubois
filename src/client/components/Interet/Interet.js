import React, { Component } from 'react';
import './Interet.css';

export default class Interet extends Component {
  render() {
    return (
      <div className="fullinteret">
        <h2 className="title-interet">Centres d'intérêt</h2>
        <div className="item-interet"><u>Sports :</u> Ski Alpin, VTT, Volley.</div>
        <div className="item-interet last-interet"><u>Passions :</u> Internet, Technologie, Sécurité Informatique (White hat), Musique, Bricolage.</div>
      </div>
    );
  }
}
