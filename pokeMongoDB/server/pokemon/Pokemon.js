// This is the model
var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// TODO: Complete the pokemonSchema below.
var pokemonSchema = new mongoose.Schema({
    number: { type: Number, unique: true },
    name: { type: String, unique: true },
    types: [{ type: String }],
    description: { type: String },
  });
  
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;