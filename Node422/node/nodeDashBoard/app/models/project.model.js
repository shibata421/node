const sql = require("./db.js");

// constructor
const Project = function(project) {
  this.name = project.name;
  this.start_date = project.start_date;
  this.company = project.company;
  this.offer = project.offer;
  this.status = project.status;
  this.hours = project.hours;
  this.img_url = project.img_url;
  this.company_logo = project.company_logo;
};

Project.findById = (id, result) => {
  sql.query(`SELECT * FROM projects WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found project: ", res[0]);
      result(null, res[0]);
      return;
    }
    // Projeto com id não encontrado
    result({ kind: "not_found" }, null);
  });
};

Project.getAll = (name, result) => {
  let query = "SELECT * FROM projects";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("projects: ", res);
    result(null, res);
  });
};


Project.remove = (id, result) => {
  sql.query("DELETE FROM projects WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // Projeto com id não encontrado
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted project with id: ", id);
    result(null, res);
  });
};

module.exports = Project;
