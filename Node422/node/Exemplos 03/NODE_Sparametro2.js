var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.nome + " " + q.telefone + " " + q.email + " " + q.novidades + " " + q.mensagem;
  res.end(txt);
}).listen(8080);

console.log("Servidor escutando a porta 8080...");

console.log("Execute o programa PassagemDeValores2.html")