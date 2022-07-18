var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT idAluno, nome FROM alunoNODE", function (err, result, fields) {
    if (err) throw err;
    //Return the fields object:
    console.log(fields);
  });
  con.end();
});
