var http = require('http');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(301, {
    'Location': process.env.URL || (process.env.DOMAIN + req.url),
  });
  res.end();
  // вот фэк-то
}).listen(port, function() {
  console.log("Listening on " + port);
});
