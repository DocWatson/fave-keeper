var mongoose = require('mongoose');

module.exports = mongoose.model( 'Admin', {
  username: String,
  hash: String,
  salt: String
});