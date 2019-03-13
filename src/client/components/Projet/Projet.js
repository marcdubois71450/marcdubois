import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './Projet.css';


export default class Projet extends Component {

  state = {
      isOver: "none",
      displayProjet: "none"
    };


    //Superviseur
  onMouseOverSuperviseur = () => {
  this.setState({ isOver: "superviseur"});
  console.log("onMouseOverSuperviseur");
  };

  onClickSuperviseur = () => {
  this.setState({ isOver: "superviseur"});
  this.setState({ displayProjet: "superviseur"});
  console.log("OnClickSuperviseur");
  };

  //WebSolea
  onMouseOverWebSolea = () => {
  this.setState({ isOver: "websolea"});
  console.log("onMouseOverWebSolea");

  };

  onClickWebSolea = () => {
  this.setState({ isOver: "websolea"});
  this.setState({ displayProjet: "websolea"});

  console.log("OnClickWebSolea");
  };

  //CV
  onMouseOverCV = () => {
  this.setState({ isOver: "cv"});
  console.log("onMouseOverCV");

  };

  onClickCV = () => {
  this.setState({ isOver: "cv"});
  this.setState({ displayProjet: "cv"});

  console.log("OnClickCV");
  };

  onMouseOutAll = () => {
  this.setState({ isOver: "none"});
  console.log("onMouseOutAll");
  };

  render() {


    let classNameSuperviseur;
    let classNameCV;
    let classNameWebSolea;
    if (this.state.displayProjet == "none") {
      if (this.state.isOver == "none") {
            classNameSuperviseur = 'superviseur-bouton';
            classNameCV = 'cv-bouton';
            classNameWebSolea = 'websolea-bouton';
      }
      else if (this.state.isOver == "superviseur"){
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "cv") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-more';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "websolea") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
      else {
            classNameSuperviseur = 'superviseur-bouton';
            classNameCV = 'cv-bouton';
            classNameWebSolea = 'websolea-bouton';
      }

    }
    else if (this.state.displayProjet == "superviseur") {
      if (this.state.isOver == "none") {
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "superviseur"){
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "cv") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-more';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "websolea") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
      else {
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
    }
    else if (this.state.displayProjet == "websolea") {
      if (this.state.isOver == "none") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
      else if (this.state.isOver == "superviseur"){
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "cv") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-more';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "websolea") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
      else {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
    }
   else if (this.state.displayProjet == "cv") {
      if (this.state.isOver == "none") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-more';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "superviseur"){
            classNameSuperviseur = 'superviseur-bouton-more';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "cv") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-more';
            classNameWebSolea = 'websolea-bouton-less';
      }
      else if (this.state.isOver == "websolea") {
            classNameSuperviseur = 'superviseur-bouton-less';
            classNameCV = 'cv-bouton-less';
            classNameWebSolea = 'websolea-bouton-more';
      }
      else {
          classNameSuperviseur = 'superviseur-bouton-less';
          classNameCV = 'cv-bouton-more';
          classNameWebSolea = 'websolea-bouton-less';
      }
    }
    else {
      classNameSuperviseur = 'superviseur-bouton';
      classNameCV = 'cv-bouton';
      classNameWebSolea = 'websolea-bouton';
    }

const opts = {
  width: '757',
  height: '473',
  playerVars: {
    autoplay: true,
    loop: true,
    showInfo: false,
    modestBranding: true
  }
};
let displayProjetDiv;

    if (this.state.displayProjet == "superviseur") {
      displayProjetDiv = (
        <div>
          <div className="title-superviseur">Superviseur</div>
          <div className="description-superviseur">Superviseur est une application multiplateforme macOS et Windows, réalisée durant mon stage de DUT, au sein de l'entreprise Intactile DESIGN.
          <br/>Le code est privé. Cette application permet d'analyser le réseau de l'entreprise, pour détecter des potentiels intrus ainsi que récupérer des informations sur les différentes machines de ce réseau.</div>
          <div className="technologie-superviseur">J'ai réalisé cette application avec Trello, Figma, NodeJS, Electron, Webpack, ReactJS, Redux, SNMP, Etc. En collaboration avec un designer.</div>
          <div className="youtube-superviseur">
            <YouTube videoId="SnFkgHDW1D0" opts={opts} onReady={this._onReady}/>
          </div>
          <br/><br/><br/><br/>
        </div>
      )
    } else if (this.state.displayProjet == "cv"){
      displayProjetDiv = (
        <div>
          <div className="title-cv">Curriculum Vitæ</div>
          <div className="description-cv">Mon Curriculum Vitæ est un projet personnel, que j'ai réalisé dans le but de trouver une entreprise, en appliquant mes connaissances.
          <br/>J'ai réalisé ce projet avec NodeJS, Webpack, ReactJS, Let's Encrypt, Linux, DNS Infomaniak, Etc.
          <br/>Vous êtes actuellement en train de visualiser ce projet.</div>
          <div className="git-cv">Le code de ce projet est disponible sur mon GitHub : <a href="https://github.com/marcdubois71450/marcdubois" target="_blank">https://github.com/marcdubois71450/marcdubois</a></div>
          <br/><br/><br/><br/>
        </div>
      )
    } else if (this.state.displayProjet == "websolea"){
      displayProjetDiv = (
        <div>
          <div className="title-websolea">WebSolea</div>
          <div className="description-websolea">WebSolea est une application Web, réalisée au cours de ma Licence 3, Télécommunications et réseaux informatiques au sein de l'Université Savoie Mont Blanc. Cette application permet d'administrer les différents équipements réseaux et serveurs d'une entreprise.
          <br/>J'ai réalisé ce projet avec NodeJS, Webpack, ReactJS, SSH, Etc.</div>
          <div className="git-websolea">Le code de ce projet est disponible sur mon GitHub : <a href="https://github.com/marcdubois71450/web_solea" target="_blank">https://github.com/marcdubois71450/web_solea</a></div>
          <br/><br/><br/><br/>
        </div>
      )
    } else {
      displayProjetDiv = (
        <div className="more-projet">Sélectionner un projet ci-dessus<br/><br/></div>
      )
    }

    return (
      <div className="fullprojet">
        <h2 className="title-projet">Projet</h2>
        <div className="main-projet">
            <div className={classNameSuperviseur} onMouseOver={this.onMouseOverSuperviseur} onMouseOut={this.onMouseOutAll} onClick={this.onClickSuperviseur}>
              <div className="texte-projet">Superviseur</div>
            </div>
            <div className={classNameCV} onMouseOver={this.onMouseOverCV} onMouseOut={this.onMouseOutAll} onClick={this.onClickCV}>
              <div className="texte-projet">Curriculum Vitæ</div>
            </div>
            <div className={classNameWebSolea} onMouseOver={this.onMouseOverWebSolea} onMouseOut={this.onMouseOutAll} onClick={this.onClickWebSolea}>
              <div className="texte-projet">WebSolea</div>
            </div>
        <hr className="hr-projet"/>
        {displayProjetDiv}
      </div>
    </div>
    );
  }
}
