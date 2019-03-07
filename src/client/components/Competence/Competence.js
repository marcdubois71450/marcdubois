import React, { Component } from 'react';
import './Competence.css';


export default class Competence extends Component {


  render() {
    return (
      <div className="fullcompetence">
        <h2 className="title-competence">Compétences</h2>
        <div className="item-competence"><u>Language Informatiques :</u> JavaScript, HTML, CSS, PHP, Python, SQL, JSX.</div>
        <div className="item-competence"><u>Infrastructures et configurations de serveur :</u> Active Directory, DHCP, DNS, Partage de Fichier, VPN, Web (NodeJS, PHP), Hyper-V, SSH, FTP, Asterisk, etc.</div>
        <div className="item-competence"><u>Réseaux :</u> Cisco, commutation, routage, IPV4, IPV6, VLAN.</div>
        <div className="item-competence"><u>Scripts :</u> PowerShell, bash.</div>
        <div className="item-competence"><u>Systèmes d'exploitation :</u> Windows : XP, 7, 8, 10, Serveur 2008, 2012 R2, 2016.<br/>Linux : Debian, Unbuntu, Mandriva, Cent-OS.<br/>macOS : Mojave, High Sierra, Sierra, El Capitan, Yosemite, Maverick.</div>
        <div className="item-competence"><u>Logiciels :</u> Photoshop, Premiere Pro, Wireshark, Packet Tracer, Virtual Box, Cordova, Pack Office, Inventor, Arduino.</div>
        <div className="item-competence"><u>Anglais :</u> Intermédiaire</div>
        <div className="item-competence last-competence">Permis B, Véhiculé</div>

      </div>
    );
  }
}
