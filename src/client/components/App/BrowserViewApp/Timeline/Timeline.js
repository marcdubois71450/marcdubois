import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Lycee from '../Modal/Lycee';
import USMB from '../Modal/USMB';
import IUT from '../Modal/IUT';
import Stage from '../Modal/Stage';
import Animateur from '../Modal/Animateur';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
      open: false,
      modale: "none"
    };

onOpenModalLycee = () => {
this.setState({ open: true,
                modale: "lycee"});
                console.log(this.state.modale);
              };

onOpenModalIUT = () => {
this.setState({ open: true,
                modale: "iut"});
                console.log(this.state.modale);
              };

onOpenModalUSMB = () => {
this.setState({ open: true,
                modale: "usmb"});
                console.log(this.state.modale);
              };

onOpenModalAnimateur = () => {
  this.setState({ open: true,
                modale: "animateur"});
                console.log(this.state.modale);
              };

onOpenModalStage = () => {
this.setState({ open: true,
                modale: "stage"});
                console.log(this.state.modale);
              };

onCloseModal = () => {
  this.setState({ open: false });
};

render() {
const { open, modale} = this.state;
    return (
      <div styleName="fulltimeline">
        <Modal open={open} onClose={this.onCloseModal} blockScroll={!open} center>
          { modale == "lycee" ?  <Lycee />
          : modale=="iut" ? <IUT />
          : modale=="usmb" ? <USMB />
          : modale == "animateur" ? <Animateur />
          : modale == "stage" ? <Stage />
          : <h1>Erreur</h1>  }

        </Modal>
        <div styleName="etude">
          <h2 styleName="title-timeline">Etudes et Diplômes</h2>
          <div styleName="date">Septembre 2013</div>
          <br/>
          <div styleName="timeline-item">
            <p styleName="in-timeline-item">Lycée Henri Parriat</p>
            <p styleName="in-timeline-item2">Baccalauréat scientifique, SSI science de l'ingénieur.</p>
            <button styleName="modal-bouton-left" onClick={this.onOpenModalLycee}>+</button>
          </div>
          <div styleName="date2">Juin 2016</div>
          <div styleName="date3">Septembre 2016</div>
          <div styleName="timeline-item2">
            <p styleName="in-timeline-item">IUT Annecy</p>
            <p styleName="in-timeline-item2">DUT R&T Réseaux et Télécommunication</p>
            <button styleName="modal-bouton-left" onClick={this.onOpenModalIUT}>+</button>
          </div>
          <div styleName="date4">Juin 2018</div>
          <div styleName="date3">Septembre 2018</div>
          <div styleName="timeline-item3">
            <p styleName="in-timeline-item">USMB</p>
            <p styleName="in-timeline-item2">Licence 3 TRI Télécommunications et réseaux informatiques</p>
            <button styleName="modal-bouton-left" onClick={this.onOpenModalUSMB}>+</button>
          </div>
          <div styleName="date4">Aujourd'hui</div>
        </div>
        <div styleName="timeline"></div>
        <div styleName="experience">
          <h2 styleName="title-timeline">Expérience professionnelle</h2>
          <div styleName="date-right">Juillet 2015</div>
          <br/>
          <div styleName="timeline-item-right">
            <p styleName="in-timeline-item-right">Animateur (Centre de loisirs)</p>
            <button styleName="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>
          </div>
          <div styleName="date2-right">Aout 2015</div>
          <div styleName="date3-right">Juillet 2016</div>
          <br/>
          <div styleName="timeline-item-right">
            <p styleName="in-timeline-item-right">Animateur (Centre de loisirs)</p>
            <button styleName="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>
          </div>
          <div styleName="date2-right">Aout 2016</div>
          <div styleName="date4-right">Avril 2018</div>
          <br/>
          <div styleName="timeline-item2-right">
            <p styleName="in-timeline-item-right">Stage DUT (dévelopement, projet : Superviseur)</p>
            <button styleName="modal-bouton-right" onClick={this.onOpenModalStage}>+</button>
          </div>
          <div styleName="date2-right">Juin 2018</div>
          <div styleName="date5-right">Juillet 2018</div>
          <br/>
          <div styleName="timeline-item-right">
            <p styleName="in-timeline-item-right">Animateur (Accueil Jeunes)</p>
            <button styleName="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>
          </div>
          <div styleName="date2-right">Aout 2018</div>
        </div>
      </div>
    );
  }
}
