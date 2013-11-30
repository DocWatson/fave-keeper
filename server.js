// set up ======================================================================
  var express  = require('express');
  var app      = express();                     // create our app w/ express
  var mongoose = require('mongoose');           // mongoose for mongodb
  var port     = process.env.PORT || 8080;      // set the port
  var database = require('./config/database');  // load the database config
  var passport = require("passport");           // load passport for user auth
  var LocalStrategy = require('passport-local').Strategy; //use passport-local for local authentication
  var server = require('http').createServer(app);
  var io = require('socket.io').listen(server);
  var authorizer = require('./app/controllers/authorization');

//Connect to the database
mongoose.connect(database.url);

app.configure(function() {
    app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
    app.use(express.logger('dev'));                     // log every request to the console
    app.use(express.bodyParser());                      // pull information from html in POST
    app.use(express.methodOverride());                  // simulate DELETE and PUT
    app.use(express.cookieParser());                    // pull info from COOKIEs
    app.use(express.session({ secret: 'favekeeper-secrets' }));
    app.use(passport.initialize());
    app.use(passport.session());                 
    app.set('port', port);
  });

// routes ======================================================================
  require('./app/routes.js')(app, authorizer);


// Socket.io Communication
io.sockets.on('connection', require('./app/socket-routes.js'));

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
