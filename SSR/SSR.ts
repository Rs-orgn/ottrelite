
//expressjs
const express = require('express');
const app = express();

//path
const path = require('path');

//port
const port = 3000 || process.env.PORT;


//Confuguring the server

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./MainPage/index.html'));
  app.use(express.static('MainPage'));
  res.sendFile(path.resolve('./OurTeam/teamStats.html'));
  app.use(express.static('OurTeam'))
  res.sendFile(path.resolve('.'));
  app.use(express.static(''))
  res.sendFile(path.resolve('.'));
  app.use(express.static(''))
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
