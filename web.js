var http = require('http');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(302, {
    'Location': 'https://www.youtube.com/watch?v=grs8qligDWo'
  });
  res.end();
  // вот фэк-то
}).listen(port, function() {
  console.log("Listening on " + port);
});
