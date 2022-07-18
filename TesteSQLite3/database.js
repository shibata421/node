const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')

const DBSOURCE = "db.sqlite"
const tableQuery = `DROP TABLE user;
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text, 
    email text UNIQUE, 
    password text, 
    CONSTRAINT email_unique UNIQUE (email)
    );`
const insertQuery = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'

let db = new sqlite3.Database(DBSOURCE, err => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected do the SQLite database')
        db.run(tableQuery, err => {
            if (err) {
                console.log("Table already created")
            } else {
                db.run(insertQuery, ["admin", "admin@example.com", md5("admin123456")])
                db.run(insertQuery, ["user", "user@example.com", md5("user123456")])
            }
        })
    }
})

module.exports = db