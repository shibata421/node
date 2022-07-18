const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json())

const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

connection.connect(err => {
  if (!err) {
    console.log("mydb esta conectado ... nn");
  } else {
    console.log("Error ao conectar no mydb ... nn");
  }
});

app.post('/api/book', (req, res, next) => {
  var cope = req.body;

  connection.query('insert into cope set ?', cope, (err, result) => {
    if (err) {
      console.error(err);
      return res.send(err);
    }

    return res.status(201).send('Ok');
  });

});

app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));