// expose the routes to our app with module.exports
module.exports = function(socket) {
	socket.on('list:update', function (data) {
    	socket.broadcast.emit('list:update', data);
  	});
};