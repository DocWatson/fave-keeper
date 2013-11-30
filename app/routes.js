// load the todo model
var Friend = require('./models/friends');
var Admin  = require('./models/admin')

// expose the routes to our app with module.exports
module.exports = function(app) {

	// api ---------------------------------------------------------------------

	// Return all friends and their scores
	app.get('/api/friends', function(req, res) {
		// use mongoose to get all todos in the database
		Friend.find(function(err, friends) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(friends); // return all todos in JSON format
		});
	});

	// Add a new friend and their score to the list
	app.post('/api/friends', function(req, res) {
		// create a Friend, information comes from AJAX request from Angular
		Friend.create({
			name : req.body.text,
			score : 0
		}, function(err, friend) {
			if (err)
				res.send(err);

			// get and return all the Friends after you create another
			Friend.find(function(err, friends) {
				if (err)
					res.send(err)
				res.json(friends);
			});
		});
	});

	app.post('/api/friends/score/:friend_id', function(req, res) {
		Friend.findById(req.params.friend_id, function(err, p) {
		  if (!p)
		    return next(new Error('Friend not found'));
		  else {
		    // do your updates here
		    p.score = req.body.score;

		    p.save(function(err) {
		      if (err)
		        res.send(err);
		      else
		        Friend.find(function(err, friends) {
					if (err)
						res.send(err);
					res.json(friends);
				});
		    });
		  }
		});

	});

	// delete a friend
	app.delete('/api/friends/:friend_id', function(req, res) {
		Friend.remove({
			_id : req.params.friend_id
		}, function(err, friend) {
			if (err)
				res.send(err);

			// get and return all the Friends to update the list
			Friend.find(function(err, friends) {
				if (err)
					res.send(err)
				res.json(friends);
			});
		});

	});

	app.get('/admin', function(req, res) {
		res.sendfile('./public/index-admin.html'); // if at the Admin URL, load the admin template
	});

	app.get('/login', function(req, res) {
		res.sendfile('./public/login.html'); // login
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};