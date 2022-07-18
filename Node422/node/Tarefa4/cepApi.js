const conn = require('./mysql')

conn.query('SELECT * FROM aluno', (err, result, fields) => {
    console.log(result)
})