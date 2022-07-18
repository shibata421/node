const express = require('express')
const soma = require('./routes/soma')
const subtracao = require('./routes/subtracao')
const multiplicacao = require('./routes/multiplicacao')
const divisao = require('./routes/divisao')

const PORT = 3000;
const app = express();

app.use('/soma', soma)
app.use('/subtracao', subtracao)
app.use('/multiplicacao', multiplicacao)
app.use('/divisao', divisao)

app.listen(PORT, () => console.log(`Escutando porta ${PORT}`))