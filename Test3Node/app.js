const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");

const userJson = fs.readFileSync("./user.json");
const { host, user, password } = JSON.parse(userJson);
const connection = mysql.createConnection({
  host,
  user,
  password,
  database: "posts_comments",
});

// recreates the db each time the code restarts
const refreshDB = fs.readFileSync("./data.sql").toString();
const dataArr = refreshDB.toString().split(";");
dataArr.forEach(item => {
  if (item) {
    connection.query(item);
  }
});

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/post", (req, res) => {
  res.send("HI from express!");
});

app.get("/post/:postId", (req, res) => {
  const q = "SELECT title, content, creation_date FROM posts WHERE id = ?";
  const postId = parseInt(req.params.postId);
  connection.query(q, postId, (err, results) => {
    if (err || !results[0]) {
      errorFunction(res);
    } else {
      res.send(results[0]);
    }
  });
});

app.get("/post/:postId/comments", (req, res) => {
  const q = "SELECT id, content, author, creation_date FROM comments WHERE post_id = ?";
  const postId = parseInt(req.params.postId);
  connection.query(q, postId, (err, results) => {
    if (err) {
      errorFunction(res);
    } else {
      res.send(results);
    }
  });
});

app.post("/post/:postId/comment", (req, res) => {
  const postId = parseInt(req.params.postId);
  const comment = {
    post_id: postId,
    author: req.body.author,
    content: req.body.content,
  };
  const q = "INSERT INTO comments SET ?";
  connection.query(q, comment, (err, results) => {
    if (err) {
      errorFunction(res);
    } else {
      res.status(201);
      res.send("success");
    }
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

const errorFunction = res => {
  res.status(404);
  res.send("Post does not exist");
};
