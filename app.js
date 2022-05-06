var express = require("express");
var app = express();
var http = require("http");
const path = require('path');
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'homepage.html'));
  });

  app.get('/to-do-list', function(req, res) {
    res.sendFile(path.join(__dirname, 'To-Do.html'));
  });


var server = http.createServer(app);

server.listen(3000);
