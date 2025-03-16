var server = require("./server.js");

server.forRoute("GET", "/", function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("hello");
	response.end();
});

server.start();