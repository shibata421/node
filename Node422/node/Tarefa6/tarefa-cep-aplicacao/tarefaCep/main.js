const express = require('express');
const mysql = require('mysql');
const axios = require('axios');

async function insertCep(data) {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "mydb"
    });
    
    await con.connect((err) => {
        if (err) throw err;
        
        const sql = `INSERT INTO ceps SET ?`
            
            con.query(sql, data, (err, result) => {
                if (err) throw err;
                console.log('gravado com sucesso!');
        });
        
        con.end();
    })
}

const app = express();

app.get('/', (req, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/get-cep', (request, resp) => {
    console.log(`CEP Recebido: ${request.query.cep}`);

    axios
        .get(`https://viacep.com.br/ws/${request.query.cep}/json/`)
        .then(response => {
            console.log(response.data);
            insertCep(response.data)
                .then(result => resp.send('Sucesso!'))
                .catch(err => resp.send('Erro!'));
        })
        .catch(err => console.log(`Error: ${err}`));
});

const port = 8080;
app.listen(port, () => console.log(`app is listening on port ${port}`))