var r = require('rethinkdb');


var p = r.connect({
	host: 'localhost',
	port: 28015
});

p.then(function(conn) {
	r.db('mmo').tableCreate('users').run(conn, function() {
		console.log("created users");
	});
}).error(function(error) {

});
