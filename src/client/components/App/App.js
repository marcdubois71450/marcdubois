import React, { Component } from 'react';
import './App.css';
import Timeline from '../Timeline';
import Competence from '../Competence';
import Projet from '../Projet';
import Interet from '../Interet';
import Reseaux from '../Reseaux';
import Plus from '../Plus';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-113502982-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="annecy">
          <div className="title">Marc Dubois</div>
          <div className="texte">Etudiant, en recherche d'alternance.</div>
          <div className="pdf">Télecharger la version <a className="pdf-link" href="MarcDubois_CV.pdf" target="_blank">PDF</a>.</div>
          <div className="info">?<div className="info2">Lac d'Annecy</div>
        </div>
       </div>
       <Timeline />
       <Competence />
       <Projet />
       <Interet />
       <Reseaux />
       <Plus />
      </div>
    );
  }
}
