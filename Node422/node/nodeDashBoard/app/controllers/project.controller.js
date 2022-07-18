const Project = require("../models/project.model.js");

// Find a single Project by Id
exports.findOne = (req, res) => {
  Project.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Projeto com id ${req.params.id} não encontrado.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao recuperar projeto com id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Retrieve all Projects from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Project.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao recuperar os projetos."
      });
    else res.send(data);
  });
};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {
  Project.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Projeto com id ${req.params.id} não encontrado.`
        });
      } else {
        res.status(500).send({
          message: "Não foi possivel deletar o projeto com id " + req.params.id
        });
      }
    } else res.send({ message: `O projeto foi deletado com sucesso!` });
  });
};