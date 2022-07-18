var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});
connection.connect();
var cope = {
  author: 'Alencar',
  title: 'Iracema',
  body: '1865'
};
var query = connection.query('insert into cope set ?', cope, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});