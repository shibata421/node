const express = require('express')
const db = require('./database')

const port = 3000
const app = express()

app.use(express.json())

app.get('/api/users', (req, res) => {
    const sql = "SELECT * FROM user"
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json(getSuccessMessage(rows))
    })
})

app.get("/api/users/:id", (req, res) => {
    const sql = "SELECT * FROM user WHERE id = ?"
    db.all(sql, [req.params.id], (err, rows) => {
        if (err) {
            res.status(400).json({ "error" : err.message })
            return
        }
        res.send(getSuccessMessage(rows))
    })

})

app.post("/api/users", (req, res) => {
    const sql = `INSERT INTO user (name, email, password)
    VALUES (?, ?, ?)`
    const params = [req.body.name, req.body.email, req.body.password]
    db.run(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message})
            return
        }
        res.status(201)
    })
})

function getSuccessMessage(rows) {
    return {
            "message" : "success",
            "data": rows
        }
}

app.listen(port, err => {
    if (err) console.log(err)
    console.log(`Ouvindo porta ${port}`)
})