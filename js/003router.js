// import few modules
var http = require("http"),
	url = require("url");

// set some variables
var html = "", 
	header = {
		"Content-Type": "text/html"
	};;

// define the router
var route = {
	routes : {},
	when: function(path, handler) {
		this.routes[path] = handler;
	}
};

// set some route
route.when("/", function(request, response){	
	html = "<a href=\"/start\">start</a><br>"+
				"<a href=\"/end\">end</a><br>";
	response.writeHead(200, header);
	response.write(html);
	response.end();
});
route.when("/start", function(request, response){	
	html = "hello";
	response.writeHead(200, header);
	response.write(html);
	response.end();
});
route.when("/end", function(request, response){	
	html = "goodbye";
	response.writeHead(200, header);
	response.write(html);
	response.end();
});

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	if(typeof route.routes[pathname] === 'function') {
		route.routes[pathname](request, response);
	} else {
		html = "404 Not Found";
		response.writeHead(404, header);
		response.write(html);
		response.end();
	}
}
http.createServer(onRequest).listen(9999);
console.log("Server is up: http://localhost:9999/");