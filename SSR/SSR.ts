
//expressjs
const express = require('express');
const app = express();

//path
const path = require('path');

//port
const port = 8080 || process.env.PORT;


//Confuguring the server

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./MainPage/index.html'));
  app.use(express.static('MainPage'));
});

app.get('/OurTeam', function(req, res) {
    res.sendFile(path.resolve('./OurTeam/teamStats.html'));
    app.use(express.static('OurTeam'));
});

app.get('/ContactUs', function(req, res) {
    res.sendFile(path.resolve('./Contact/contact.html'))
    app.use(express.static('Contact'))
})

app.get('/Login', function(req, res) {
    res.sendFile(path.resolve('./Login/login.html'))
    app.use(express.static('Login'))
})

app.listen(port);
console.log('Server started at http://localhost:' + port);
