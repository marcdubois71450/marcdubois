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

} else if (this.state.displayProjet == "websolea") {

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

} else if (this.state.displayProjet == "cv") {

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

} else {
  classNameSuperviseur = 'superviseur-bouton';
  classNameCV = 'cv-bouton';
  classNameWebSolea = 'websolea-bouton';
}


const opts = {
  width: '757',
  height: '473',
  playerVars: { // https://developers.google.com/youtube/player_parameters
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
          <div className="description-superviseur">Superviseur est une application multiplateforme macOS et Windows, réaliser durant mon stage de DUT, au sain de l'entreprise Intactile DESIGN. Le code n'est pas public. Cette application permet d'analyser le réseau de l'entreprise, pour détecter des potentiels intrus ainsi que récupérer des informations sur les différentes machines de ce réseau.</div>
          <div className="technologie-superviseur">Cette application a été réaliser avec Trello, Figma, NodeJS, Electron, Webpack, ReactJS, Redux. En collaboration avec un designer.</div>
          <div className="youtube-superviseur">
            <YouTube videoId="SnFkgHDW1D0" opts={opts} onReady={this._onReady}/>
          </div>
        </div>
      )
    } else if (this.state.displayProjet == "cv"){
      displayProjetDiv = (
        <div>CV</div>
      )
    } else if (this.state.displayProjet == "websolea"){
      displayProjetDiv = (
        <div>WebSolea</div>
      )
    } else {
      displayProjetDiv = (
        <div className="more-projet">Sélectionner un projet ci-dessus</div>
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
