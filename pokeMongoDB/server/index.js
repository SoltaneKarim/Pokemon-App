var express = require('express');
var morgan = require('morgan');
var db = require('./db');
const pokemonRouter = require('./pokemon/pokemonRouter.js');

var app = express();

db.once('open', () => {
  console.log('Connected to MongoDB successfully!!!!!');
});
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/api/pokemon',pokemonRouter)


// TODO: Import the pokemonRouter and assign it to the correct route:

var PORT = 3000;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});