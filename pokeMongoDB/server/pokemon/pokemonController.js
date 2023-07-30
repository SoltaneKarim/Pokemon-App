var Pokemon = require('./Pokemon');

// TODO: Complete each of the following controller methods
exports.createOne = function (req, res) {
console.log(req.body)
    const { number, name, types, description } = req.body;  
    const newPokemon = new Pokemon({
        number,
        name,
        types,
        description,
      });
  
      newPokemon.save()
      .then((savedPokemon) => {
        console.log('New Pokemon saved:', savedPokemon);
        res.status(201).json(savedPokemon)
      })
      .catch((error) => {
        console.error('Error saving Pokemon:', error);
      });
  };
  
    exports.retrieve = function (req, res) {
        // Retrieve all Pokémon from the database
        Pokemon.find({}, (err, pokemons) => {
        if (err) {
            res.status(500).json({ error: 'Failed to retrieve Pokémon.' });
        } else {
            res.status(200).json(pokemons);
        }
        });
    };
  
    exports.retrieveOne = function (req, res) {
        const { number } = req.params; 
  
    Pokemon.findOne({number})
    .then((savedPokemon) => {
        console.log('New Pokemon saved:', savedPokemon);
        res.status(201).json(savedPokemon)
      })
      .catch((error) => {
        console.error('Error saving Pokemon:', error);
      });
  };
  
    exports.updateOne = function (req, res) {
        const { number } = req.params; 
        console.log('hello',number)
        const filter = {number}
  
    Pokemon.updateOne(
      filter,
      { $set: req.body }, 
      { new: true }, // Return the updated Pokémon in the response
      (err, updatedPokemon) => {
        if (err) {
          res.status(500).json({ error: 'Failed to update Pokémon.' });
        } else {
          res.status(200).json(updatedPokemon);
        }
      }
    );
  };
  
  exports.deleteOne = function (req, res) {
    const { number } = req.params; 
    const filter = {number}
  
    Pokemon.deleteOne(filter, (err, deletedPokemon) => {
      if (err) {
        res.status(500).json({ error: 'Failed to delete Pokémon.' });
      } else if (!deletedPokemon) {
        res.status(404).json({ error: 'Pokémon not found.' });
      } else {
        res.status(200).json({ message: 'Pokémon deleted successfully!' });
      }
    });
  };