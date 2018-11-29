const express = require('express');
const os = require('os');
const md5 = require('md5');


const app = express();

const port = "80"; // Pour du serveur en Production

app.use(express.static('dist'));
app.get('/api/serverinfo', (req, res) => res.send({ OsType: os.type() }));
app.get('/api/serverport', (req, res) => res.send({ Port: port }));
app.get('/.well-known/acme-challenge/vXb3uzipv_0hIUk-Dh9-NHFsJ95qogPkY-3T7FETQqg', (req, res) => res.send("vXb3uzipv_0hIUk-Dh9-NHFsJ95qogPkY-3T7FETQqg.X8zgRgDtKz0BJA31Qy8IAEobIygxKFL4BSesZ4Nmchw"));



app.listen(port, () => console.log('Le serveur est prêt sur le port '+port+' !'));
