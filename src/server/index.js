const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

app.all(/.*/, function(req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "https://www." + host);
  }
});

const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.marcdubois.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.marcdubois.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/www.marcdubois.fr/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use(express.static('dist'));
app.get('/api/test', (req, res) => res.send({ Api: 'It works!' }));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
