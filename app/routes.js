// load the todo model
var Friend = require('./models/friends');

// expose the routes to our app with module.exports
module.exports = function(app) {

	// api ---------------------------------------------------------------------

	// Return all friends and their scores
	app.get('/api/todos', function(req, res) {

	});

	// Add a new friend and their score to the list
	app.post('/api/todos', function(req, res) {


	});

	// delete a friend
	app.delete('/api/todos/:todo_id', function(req, res) {


	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};