// load the todo model
//var Friend = require('./models/friends');

// expose the routes to our app with module.exports
module.exports = function(socket) {
	socket.emit('init', {

	});

	socket.on('list:update', function (data) {
    	socket.broadcast.emit('list:update', data);
	    console.log(data);
  	});
};