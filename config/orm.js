// requiring mysql connection
var connection = require('../config/connection.js');

selectAll()
insertOne()
updateOne()

function printQuestionMarks(num) {
  var arr = [];

// function to create a string of question marks should an argument have multiple values
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// creating an object for all SQL statement functions
var orm = {
	selectAll: function(tableName, cb) {
		var queryString = 'SELECT * FROM ' + tableName + ';';
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		})
	},
	// might have to put cols.toString(); in queryString here...
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table + ' (' + cols + ') VALUES (' + printQuestionMarks(vals.length) + ');';
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function() {
		
	}
}