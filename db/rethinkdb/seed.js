var r = require('rethinkdb');


var p = r.connect({
	host: 'localhost',
	port: 28015
});

p.then(function(conn) {
	r.dbCreate('mmo').run(conn, function() {
		r.db('mmo').tableCreate('users').run(conn, function() {
			console.log("created users");
			process.exit();
		});
	});
}).error(function(error) {
	console.log(error);
});
