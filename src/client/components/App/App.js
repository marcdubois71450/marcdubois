import React, { Component } from 'react';
import './App.css';
import Timeline from '../Timeline';



export default class App extends Component {

  render() {

    return (
      <div>
        <div className="annecy">
          <div className="title">Marc Dubois</div>
          <div className="texte">Etudiant.</div>
          <div className="info">?<div className="info2">Lac d'annecy</div>
        </div>
       </div>
       <Timeline />
      </div>
    );
  }
}
