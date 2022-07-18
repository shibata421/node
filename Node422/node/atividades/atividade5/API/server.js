const express = require("express");
const randomId = require("random-id");
const app = express(),
  bodyParser = require("body-parser"),
  fs = require("fs"),
  port = 3080;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");
// place holder for the data
let tasks = [
  {
    id: 1,
    task: "task1",
    assignee: "assignee1000",
    status: "completed",
  },
  {
    id: 2,
    task: "task2",
    assignee: "assignee1001",
    status: "completed",
  },
  {
    id: 3,
    task: "task3",
    assignee: "assignee1002",
    status: "completed",
  },
  {
    id: 4,
    task: "task4",
    assignee: "assignee1000",
    status: "completed",
  },
];
app.use(bodyParser.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);
app.get("/api/todos", (req, res) => {
  console.log("api/todos chamada!!!!!");
  res.json(tasks);
});
app.post("/api/todo", (req, res) => {
  const task = req.body.task;
  task.id = randomId(10);
  tasks.push(task);
  res.json(tasks);
});
app.delete("/api/todo/:id", (req, res) => {
  console.log("Id para deletar:::::", req.params.id);
  console.log(tasks);
  tasks = tasks.filter((task) => task.id != req.params.id);
  console.log(tasks);
  res.json(tasks);
});
app.put("/api/todos/:id", (req, res) => {
  console.log("Id para atualizar:::::", req.params.id);
  const taskToUpdate = req.body.task;
  tasks = tasks.map((task) => {
    if (task.id == req.params.id) {
      task = taskToUpdate;
      task.id = req.params.id;
    }
    return task;
  });
  res.json(tasks);
});
app.get("/", (req, res) => {
  res.send(`<h1>API executando na porta ${port}</h1>`);
});
app.listen(port, () => {
  console.log(`Servidor escutando a porta::::::${port}`);
});
