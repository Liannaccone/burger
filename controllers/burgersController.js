Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file.
// importing express, router, and the model (burger.js) to use database functions
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', function( req, res) {
	burger.insertOne('burger_name', req.body.name, function(result) {
		// sending back the ID of the new burger...
		// res.json({ id: result.insertId});
	});
});

// export routes for the server.js to use...
module.exports = router;