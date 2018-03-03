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

router.post('/api/burgers', function(req, res) {
	burger.insertOne('burger_name', req.body.name, function(result) {
		console.log(result);
		// sending back the ID of the new burger...
		res.json({ id: result.insertId});
	});
});

router.put('/api/burgers/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition:', condition);

	burger.update({
		devoured: req.condition.devoured
	}, condition, function(result) {

		if(result.changedRows == 0) {
			return res.status(404).end();
		}
		else {
			res.status(200).end();
		}
	})
})



// export routes for the server.js to use...
module.exports = router;