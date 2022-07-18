var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'mydb'
});

app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.static('public'));

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
	res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
	app.use(cors());
	next();
});

connection.connect(function (err) {
	if (!err) {
		console.log("mydb esta conectado ... nn");
	} else {
		console.log("Error ao conectar no mydb ... nn");
	}
});

app.post('/blah', function (req, res, next) {
	var cope = req.body;
	console.log('request received:', req.body.Author);
	var query = connection.query('insert into cope set ?', cope, function (err, result) {
		if (err) {
			console.error(err);
			return res.send(err);
		} else {
			return res.send('Ok');
		}
	});
	//res.send('received the data.');
});

app.listen(3000);