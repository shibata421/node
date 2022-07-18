const express = require('express');
const app = express();

app.get('/branco', function (req, res) {
  res.send('Solicitacao de GET recebida')
})

app.delete('/azul', (request, response) => {
  response.send('Solicitacao de DELETE recebida');
});

app.post('/rosa', (request, response) => {
  response.send('Solicitacao de POST recebida');
});

app.put('/verde', (request, response) => {
  response.send('Solicitacao de PUT recebida');
});

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})

app.listen(8080, 'localhost');