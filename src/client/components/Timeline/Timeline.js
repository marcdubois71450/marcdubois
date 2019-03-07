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
      <div className="fulltimeline">
        <Modal open={open} onClose={this.onCloseModal} blockScroll={!open} center>
          { modale == "lycee" ?  <Lycee />
          : modale=="iut" ? <IUT />
          : modale=="usmb" ? <USMB />
          : modale == "animateur" ? <Animateur />
          : modale == "stage" ? <Stage />
          : <h1>Erreur</h1>  }

        </Modal>
        <div className="etude">
          <h2 className="title-timeline">Etudes et Diplômes</h2>
          <div className="date">Septembre 2013</div>
          <br/>
          <div className="timeline-item">
            <p className="in-timeline-item">Lycée Henri Parriat</p>
            <p className="in-timeline-item2">Baccalauréat scientifique, SSI science de l'ingénieur.</p>
            <button className="modal-bouton-left" onClick={this.onOpenModalLycee}>+</button>
          </div>
          <div className="date2">Juin 2016</div>
          <div className="date3">Septembre 2016</div>
          <div className="timeline-item2">
            <p className="in-timeline-item">IUT Annecy</p>
            <p className="in-timeline-item2">DUT R&T Réseaux et Télécommunication</p>
            <button className="modal-bouton-left" onClick={this.onOpenModalIUT}>+</button>

          </div>
          <div className="date4">Juin 2018</div>
          <div className="date3">Septembre 2018</div>
          <div className="timeline-item3">
            <p className="in-timeline-item">USMB</p>
            <p className="in-timeline-item2">Licence 3 TRI Télécommunications et réseaux informatiques</p>
            <button className="modal-bouton-left" onClick={this.onOpenModalUSMB}>+</button>

          </div>
          <div className="date4">Aujourd'hui</div>

        </div>
        <div className="timeline"></div>
        <div className="experience">
          <h2 className="title-timeline">Expérience professionnelle</h2>
          <div className="date-right">Juillet 2015</div>
          <br/>
          <div className="timeline-item-right">
            <p className="in-timeline-item-right">Animateur (Centre de loisirs)</p>
            <button className="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>

          </div>
          <div className="date2-right">Aout 2015</div>
          <div className="date3-right">Juillet 2016</div>
          <br/>
          <div className="timeline-item-right">
            <p className="in-timeline-item-right">Animateur (Centre de loisirs)</p>
            <button className="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>

          </div>
          <div className="date2-right">Aout 2016</div>
          <div className="date4-right">Avril 2018</div>
          <br/>
          <div className="timeline-item2-right">
            <p className="in-timeline-item-right">Stage DUT (dévelopement, projet : Superviseur)</p>
            <button className="modal-bouton-right" onClick={this.onOpenModalStage}>+</button>

          </div>
          <div className="date2-right">Juin 2018</div>
          <div className="date5-right">Juillet 2018</div>
          <br/>
          <div className="timeline-item-right">
            <p className="in-timeline-item-right">Animateur (Accueil Jeunes)</p>
            <button className="modal-bouton-right" onClick={this.onOpenModalAnimateur}>+</button>

          </div>
          <div className="date2-right">Aout 2018</div>
        </div>

      </div>
    );
  }
}
