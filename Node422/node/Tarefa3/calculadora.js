const express = require('express');
const { soma } = require('./soma.js');
const { subtracao } = require('./subtracao.js');
const { multiplicacao } = require('./multiplicacao.js');
const { divisao } = require('./divisao.js');

const app = express();
const PORT = 3000;

app.get('/soma/:x/:y', (req, res) => {
	const { x, y } = req.params;

	res.send(`${x} + ${y} = ${soma(x, y)}`)
});

app.get('/subtracao/:x/:y', (req, res) => {
	const { x, y } = req.params;

	res.send(`${x} - ${y} = ${subtracao(x, y)}`)
});

app.get('/multiplicacao/:x/:y', (req, res) => {
	const { x, y } = req.params;

	res.send(`${x} x ${y} = ${multiplicacao(x, y)}`)
});

app.get('/divisao/:x/:y', (req, res) => {
	const { x, y } = req.params;

	res.send(`${x} / ${y} = ${divisao(x, y)}`)
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`))