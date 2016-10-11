var r = require('rethinkdb');


var p = r.connect({
	host: 'localhost',
	port: 28015
});

exports.seed = function() {
	console.log('Seeding!');
	p.then(function(conn) {
		r.dbCreate('mmo').run(conn, function() {
			r.db('mmo').tableCreate('tiles').run(conn, function() {
				console.log('Created tiles!');
				process.exit();
			});
		});
	}).error(function(error) {
		console.log(error);
	});
};

exports.subscribe = function(callback) {
	p.then(function(conn) {
		rdb('mmo').table('tiles').changes().run(conn, function(err, cursor) {
			if(!err) {
				callback(cursor);
			}
		});
	});
};
