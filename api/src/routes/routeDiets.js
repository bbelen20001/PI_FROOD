const { Router } = require("express");
const { getAllDiets } = require("../handlers/handlersDiets.js");

const dietsRoute = Router();

dietsRoute.get("/", getAllDiets);

module.exports = dietsRoute;