var http = require('http');
var url = require('url');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.idAluno+" "+q.nome+ " "+q.tipo_aluno+ " " + q.tipoBolsa+ " "+q.valorMensalidade;
  res.end(txt);

  con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	//Make SQL statement:
	var sql = "INSERT INTO aluno (idAluno, nome, tipo_aluno, tipoBolsa, valorMensalidade) VALUES ?";
	//Make an array of values:
	var values = [[q.idAluno,q.nome,q.tipo_aluno,q.tipoBolsa,q.valorMensalidade]];
	//Execute the SQL statement, with the value array:

	con.query(sql, [values], function (err, result) {
		//console.trace('fatal error: ' + err.message);
		if (err) throw err;
		//if(callback) callback(err,result,fields);
		console.log("Number of records inserted: " + result.affectedRows);
	});
  }); 
  
}).listen(8080);

console.log("Servidor escutando a porta 8080...");

console.log("Execute o programa PassagemDeValores2.html")