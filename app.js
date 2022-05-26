var express = require("express");
var app = express();
var http = require("http");
const path = require('path');
const { async } = require("regenerator-runtime");
app.use(express.static(__dirname));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
  });

  app.get('/to-do-list', async (req, res)=>  {
    res.sendFile(path.join(__dirname, 'To-Do.html'));
  });


var server = http.createServer(app);

server.listen(3000);

module.exports = server;