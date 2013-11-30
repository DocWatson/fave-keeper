var mongoose = require('mongoose');

module.exports = mongoose.model( 'Admin', {
  username: String,
  pass: String,
  salt: String
});