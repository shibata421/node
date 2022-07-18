const express = require('express');
const request = require('request');
const mysql = require('mysql');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

var connection = mysql.createConnection({
		  host: 'localhost',
		  user: 'root',
		  password: 'root',
		  database: 'mydb'
   });
   
connection.connect(function(err){
if(!err) {
    console.log("mydb esta conectado ... nn");    
} else {
    console.log("Error ao conectar no mydb ... nn");    
}
});

app.get('/fetch', (req, res) => {
  request(
    { url: req.query.url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).send('error');
      }
      res.send(body);
    }
  )
});

app.get('/ler', function(req, res, next) {

	var dados = connection.query('select * from cope', function (err, result) {
			if (err) {
				console.error(err);
				return res.send(err);
			} else {
				return res.send(result);
			}
	});
	
});

app.get('/ler2', function(req, res) {
  var queryString = 'select * from cope';
  connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    res.send(fields);
  });
});

app.post('/blah', function(req, res, next) {
    var cope = req.body;
    console.log('Solicitação recebida:', req.body.Author);
    var dados = connection.query('insert into cope set ?', cope, function (err,     result) {
		if (err) {
			console.error(err);
			return res.send(err);
		} else {
			return res.send('Ok');
		}
    });
    //res.send('Dados recebidos.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));