var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var http = require('http');
var path = require('path');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.status(200).send();
});  

console.log(Date()); // log date when server restarts
// Start server
http.createServer(app).listen(app.get('port'), function (req, res) {
  console.log('Express server listening on port ' + app.get('port'));
//to do - error handling
});