var express = require('express');
var morgan = require('morgan');
var db = require('./db');


var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



// TODO: Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

var PORT = 3000;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
