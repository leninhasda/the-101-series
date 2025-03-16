var path = require('path'),
	fs = require('fs'),
	server = require('./server');

var root = __dirname;

var serveStatic = function(response, file) {
	var fileToServe = path.join(root, file);
	var stream = fs.createReadStream(fileToServe);

	stream.on('data', function(chunk){
		response.write(chunk);
	})
	.on('end', function(){
		response.end();
	});
};

server.forRoute("GET", "/", function(request, response){
	serveStatic(response, 'echo.html');
});

server.start();