var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  //var sql = "INSERT INTO alunoNODE (idAluno, nome, tipo_aluno, tipoBolsa, valorMensalidade) VALUES ?";
  var sql = "INSERT INTO alunoNODE (idAluno, nome, tipo_aluno, tipoBolsa, valorMensalidade) VALUES ?";
  //Make an array of values:
  var values = [
    ['201','John','BOLSISTA','B50',500],
    ['202','Peter','BOLSISTA','B90',100],
    ['203','Chuck',' ',' ',1000],
    ['204','Viola','BOLSISTA','B10',900]
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.end();
});