var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io')(server);

var db = require('./db/config.js');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.status(200).send();
});  

//socket stuff
io.on('connection', (client) => {
  console.log('User connected to socket.io');

  client.on('message', (data) => {
    client.broadcast.emit('message', data);
  });

  client.on('disconnect', () => {
    console.log('User has discconected from socket.io');
  });
  
});


console.log(Date()); // log date when server restarts

// Start server
server.listen(app.get('port'), function (req, res) {
  console.log('Express server listening on port ' + app.get('port'));
//to do - error handling
});

