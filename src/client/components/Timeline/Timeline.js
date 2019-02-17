import React, { Component } from 'react';
import './Timeline.css';


export default class Timeline extends Component {

  render() {

    return (
      <div className="fulltimeline">
        <div className="etude">
          <h2 className="title-timeline">Etudes et Diplômes</h2>
          <div className="date">Septembre 2013</div>
          <br/>
          <div className="timeline-item">
            <p className="in-timeline-item">Lycée Henri Parriat</p>
            <p className="in-timeline-item2">Baccalauréat scientifique, SSI science de l'ingénieur.</p>
          </div>
          <div className="date2">Juin 2016</div>
          <div className="date3">Septembre 2016</div>
          <div className="timeline-item2">
            <p className="in-timeline-item">IUT Annecy</p>
            <p className="in-timeline-item2">DUT R&T Réseaux et Télécommunication</p>
          </div>
          <div className="date4">Juin 2018</div>
          <div className="date3">Septembre 2018</div>
          <div className="timeline-item3">
            <p className="in-timeline-item">USMB</p>
            <p className="in-timeline-item2">License 3 TRI Télécommunications et réseaux informatiques</p>
          </div>
          <div className="date4">Aujourd'hui</div>

        </div>
        <div className="timeline"></div>
        <div className="experience">
          <h2 className="title-timeline">Expérience professionnelle</h2>

        </div>
      </div>
    );
  }
}
