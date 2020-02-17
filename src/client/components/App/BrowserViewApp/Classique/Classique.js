import React, { Component } from 'react';
import Timeline from './Timeline';
import Competence from './Competence';
import Projet from './Projet';
import Interet from './Interet';
import Reseaux from './Reseaux';
import Plus from './Plus';
import './Classique.css';


export default class BrowserViewApp extends Component {
  render() {
    return (
      <div>
          <div styleName="annecy">
            <div styleName="title">Marc Dubois</div>
            <div styleName="texte">Etudiant, en alternance.</div>
            <div styleName="info">?<div styleName="info2">Lac d'Annecy</div>
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
