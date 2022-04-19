const express = require("express");
const CursoController = require("../controllers/cursos.controllers");

const routes = express.Router();

routes.post("/cursos", CursoController.cadastrarCurso);

module.exports = routes; 