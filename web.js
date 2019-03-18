var http = require('http');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(302, {
  'Location': 'https://www.youtube.com/watch?v=grs8qligDWo'
});
}).listen(port, function() {
  console.log("Listening on " + port);
});
