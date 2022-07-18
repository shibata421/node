const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodelogin'
})

conn.connect(err => {
    if (err) console.log('Erro na conexão');
    else console.log('Conectado');
})

module.exports = conn;