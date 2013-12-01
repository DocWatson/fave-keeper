var Admin  = require('../models/admin');
require('../utils/hash');

module.exports = {
	authenticate: function (name, pass, fn) {
	    if (!module.parent) console.log('authenticating %s:%s', name, pass);

	    Admin.findOne({
	        username: name
	    },

	    function (err, user) {
	        if (user) {
	            if (err) return fn(new Error('cannot find user'));
	            hash(pass, user.salt, function (err, hash) {
	                if (err) return fn(err);
	                if (hash == user.hash) return fn(null, user);
	                fn(new Error('invalid password'));
	            });
	        } else {
	            return fn(new Error('cannot find user'));
	        }
	    });

	},
	requiredAuthentication: function(req, res, next) {
	    if (req.session.user) {
	        next();
	    } else {
	        req.session.error = 'Access denied!';
	        res.redirect('/login');
	    }
	}
};