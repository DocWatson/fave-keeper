Friend Voter
===========

Friend Voter is a simple app built with AngularJS and a data store to keep track of your favorite things

Installation
============

This is an application written for use with Node.JS. Download the files or clone the repository, then run:

```
npm install
```

Presently, the node_modules directory is part of the repository, so you probably won't need to run the above command, but it's a good idea just in case. Then, you may start the server by running the following command from your command line:

```
node server.js
```

By default, the application will run on your localhost on port 8080.

This version of the application assumes you have MongoDB installed on your local machine. For more information about installing Mongo, visit [this link](http://docs.mongodb.org/manual/installation/).

Alternatively, if you have a Mongo datastore elsewhere, you can modify the url in config/database.js with the appropriate paths.

Credits
============
I'd love to extend my thanks to Chris Sevilleja over at [scotch.io](http://scotch.io) for his single page MEAN app tutorials. They have been essential in refining my understanding of this server environment, and I definitely recommend reading his stuff.
