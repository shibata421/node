var express    = require('express');
var multer     = require('multer');
var mime       = require('mime');
var mysql      = require('mysql');
var app        = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port      : 3306,
  password : 'root',
  database : 'mydb'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get('/angular_html.html', function(req, res){
    res.sendFile(__dirname + '/' + 'angular_html.html');
    console.log("----------------");
});
app.post("/postFormAngular", function (req, res) {
        console.log(req.body.fName);
        res.send(req.body.fName);
});
app.listen(3000);