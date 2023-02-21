const { Router } = require("express");
const {
  searchRecipes,
 // recipeId,
 createRecipes,
 searchOne
} = require("../handlers/handlersRecipes.js");

const validate = (req, res, next) => {

  const { title, summary } = req.body;
  if (!title) return res.status(400).json({ error: "Missing title" });
  if (!summary) return res.status(400).json({ error: "Missing summary" });
  console.log(req.body);
  next();
};

const recipesRoute = Router();

recipesRoute.get("/", searchRecipes);
recipesRoute.post("/createRecipe", validate, createRecipes);
//recipesRoute.get("/searchId/:id", recipeId);
recipesRoute.get("/getone/:id", searchOne)


module.exports = recipesRoute;
