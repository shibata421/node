const express = require('express');
const session = require('express-session');
const index = require('./router/index')
const home = require('./router/home')
const auth = require('./router/auth')

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.use('/', index);
app.use('/home', home);
app.use('/auth', auth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`);
    console.log('Copie e cole a URL abaixo no seu browser');
    console.log(`http://localhost:${PORT}`);
})