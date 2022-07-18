module.exports = app => {
  const projects = require("../controllers/project.controller.js");

  var router = require("express").Router();

  // Retrieve all projects
  router.get("/", projects.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", projects.findOne);

  // Delete a project with id
  router.delete("/:id", projects.delete);

  app.use('/api/projects', router);
};
