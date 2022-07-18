var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT AL.nome, TU.name FROM alunoNODE AL RIGHT JOIN turmaNODE TU ON AL.idTurma = TU.idTurma";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
