var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var db = require('./db/lib.js');


io.on('connection', function (socket) {
	db.subscribe(function(update) {
		socket.emit('update', update);
	});
	socket.on('update', function (update) {
		db.update(update);
	});
});

function handler(req, res) {

}
