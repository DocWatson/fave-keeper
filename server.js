// set up ======================================================================
  var express  = require('express');
  var app      = express();                     // create our app w/ express
  var mongoose = require('mongoose');           // mongoose for mongodb
  var port     = process.env.PORT || 8080;      // set the port
  var database = require('./config/database');  // load the database config

//Connect to the database
mongoose.connect(database.url);

app.configure(function() {
    app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
    app.use(express.logger('dev'));                     // log every request to the console
    app.use(express.bodyParser());                      // pull information from html in POST
    app.use(express.methodOverride());                  // simulate DELETE and PUT
  });