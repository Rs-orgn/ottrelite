//expressjs
var express = require('express');
var app = express();
//path
var path = require('path');
//port
var port = 3000 || process.env.PORT;
//Confuguring the server
app.get('/', function (req, res) {
    res.sendFile(path.resolve('/MainPage/index.html'));
});
app.listen(port);
console.log('Server started at http://localhost:' + port);
