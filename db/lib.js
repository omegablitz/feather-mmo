const db = require('./rethinkdb/lib.js');

if(process.argv[2] === 'seed') {
	db.seed();
}

exports.subscribe = function(callback) {
	db.subscribe(callback);
};
