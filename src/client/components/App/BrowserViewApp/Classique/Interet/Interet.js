import React, { Component } from 'react';
import './Interet.css';

export default class Interet extends Component {
  render() {
    return (
      <div styleName="fullinteret">
        <h2 styleName="title-interet">Centres d'intérêt</h2>
        <div styleName="item-interet"><u>Sports :</u> Ski Alpin, VTT, Volley.</div>
        <div styleName="item-interet last-interet"><u>Passions :</u> Internet, Technologie, Sécurité Informatique (White hat), Musique, Bricolage.</div>
      </div>
    );
  }
}
