var http = require("http"),
	url = require("url");

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	var header = {
		"Content-Type": "text/html"
	};
	var html = "";

	if("/" === pathname) {
		html = "<a href=\"/start\">start</a><br>"+
				"<a href=\"/end\">end</a><br>";
		response.writeHead(200, header);
	} else if("/start" === pathname) {
		html = "hello";
		response.writeHead(200, header);
	} else if("/end" === pathname) {
		html = "goodbye";
		response.writeHead(200, header);
	} else {
		html = "404 Not Found";
		response.writeHead(404, header);
	}

	response.write(html);
	response.end();
}

http.createServer(onRequest).listen(9999);
console.log("Server is up: http://localhost:9999/");