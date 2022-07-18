const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
})

conn.connect(err => {
    if (err) throw new Error('Erro na conexão')
})

module.exports = conn