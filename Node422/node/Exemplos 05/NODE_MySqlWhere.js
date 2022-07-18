var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'Peter';
  var tipoBolsa = 'B50';
  //Escape the name and the address values:
  var sql = 'SELECT * FROM alunoNODE WHERE nome = ? OR tipoBolsa = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [name, tipoBolsa], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});