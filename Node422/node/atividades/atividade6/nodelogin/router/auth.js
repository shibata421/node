const router = require('express').Router();
const conn = require('../database/mysql');

router.post('/', (request, response) => {
    const { username, password } = request.body;

    if (username && password) {
        const sqlQuery = `
            SELECT * FROM accounts 
            WHERE username = ? 
            AND   password = ?`

        conn.query(sqlQuery, [username, password], (err, results, fields) => {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.status(400).send('Incorrect Username and/or Password');
            }
            response.end();
        })
    } else {
        response.status(400).send('Please enter Username and Password');
        response.end();
    }
})

module.exports = router;