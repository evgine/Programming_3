var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


var Grass = require("./Moduls/class.grass");
var Aylmolorakayin = require("./Moduls/class.aylmolorakayin");
var GrassEater = require("./Moduls/class.grassEater");
var Lazer = require("./Moduls/class.lazer");
var Gishatich= require("./Moduls/class.gishatich");