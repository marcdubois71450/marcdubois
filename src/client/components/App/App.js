import React, { Component } from 'react';
import './App.css';
import Timeline from '../Timeline';
import Competence from '../Competence';
import Projet from '../Projet';
import Interet from '../Interet';





export default class App extends Component {

  render() {

    return (
      <div>
        <div className="annecy">
          <div className="title">Marc Dubois</div>
          <div className="texte">Etudiant, en recherche d'alternance.</div>
          <div className="info">?<div className="info2">Lac d'Annecy</div>
        </div>
       </div>
       <Timeline />
       <Competence />
       <Projet />
       <Interet />
      </div>
    );
  }
}
