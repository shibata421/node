const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});

conn.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado');
    }
})

const inserirUsuario = ({ nome, telefone, email, novidades, mensagem }) => {
    novidades = (novidades === 'sim') ? 1 : 0;

    const sqlQuery = `INSERT INTO user SET ?`;

    conn.query(sqlQuery, { nome, telefone, email, novidades, mensagem }, err => {
        if (err) throw err;
    })
}

module.exports = { inserirUsuario };