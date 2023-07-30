var mongoose = require('mongoose');
var mongoUri = 'mongodb://127.0.0.1:27017/pokemon';

// Disable strict query mode
mongoose.set('strictQuery', false);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;

module.exports = db;