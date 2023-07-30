var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// TODO: Create route handlers for each of the six methods in pokemonController

pokemonRouter.get('/',pokemonController.retrieve)
pokemonRouter.post('/',pokemonController.createOne)
pokemonRouter.get('/:number',pokemonController.retrieveOne)
pokemonRouter.put('/:number',pokemonController.updateOne)
pokemonRouter.delete('/:number',pokemonController.deleteOne)

module.exports = pokemonRouter;
