var http = require("http");

http.createServer(function(request, response){
	var html = "<html>"+
				"<head><title>Node.js</title></head>"+
				"<body>hello node</body>"+
				"</html>";

	console.log(request);
	console.log(response);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(html);
	response.end();
}).listen(9999);