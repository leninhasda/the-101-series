// import few modules
var http = require("http"),
	url = require("url");

// define the router with method
var routes = {};

// request handler
function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	if(typeof routes[request.method+pathname] === 'function') {
		routes[request.method+pathname](request, response);
	} else {
		html = "404 Not Found";
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end(html);
	}
}

exports.forRoute = function(method, path, handler) {
	routes[method + path] = handler;
};
exports.start = function(){
	http.createServer(onRequest).listen(9999);
	console.log("Server is up: http://localhost:9999/");
}