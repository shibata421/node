const express = require('express');
const { inserirUsuario } = require('./bancoDeDados')

const PORT = 8080;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const user = req.query;
  const txt = `${user.nome} ${user.telefone} ${user.email} ${user.novidades} ${user.mensagem}`;

  inserirUsuario(user);

  res.set('Content-Type', 'text/html');
  res.end(txt);
  res.status(200)

  console.log(txt);
})

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
  console.log("Execute o programa NODE_PassagemDeValores2.html")
});