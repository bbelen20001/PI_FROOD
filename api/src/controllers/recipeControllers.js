const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const { DataTypes } = require("sequelize"); 
const { API_KEY } = process.env;

// me trae toda la info de la API
const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );
  const { ingredients } = apiUrl.data;
  //	"error": "getaddrinfo ENOTFOUND api.spoonacular.com"
  //(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&addRecipeInformation=true&number=100`);
  try {
    const apiInfo = await apiUrl.data.results.map((e) => {
      return {
        id: e.id,
        image: e.image,
        title: e.title,
        dietTypes: e.diets,
        summary: e.summary,
        healthScore: e.healthScore,
        ingredients: RecipesFilt(e.analyzedInstructions),
      };
    });
    return apiInfo;
  } catch (error) {}
};

function RecipesFilt(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const steps = arr[i];

    for (let j = 0; j < steps.steps.length; j++) {
      const ingred = steps.steps[j];

      result.push(ingred.ingredients);
    }
  }

  const rec = [];

  for (let i = 0; i < result.length; i++) {
    const z = result[i];
    rec.push(
      z.map((e) => {
        return { id: e.id, name: e.name, image: e.image };
      })
    );
  }

  return rec;
}

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allRecipes = [...apiInfo, ...dbInfo];

  return allRecipes;
};
//----------Arriba no mover nada eso funciona------------------------
//Traer un sola Recta 

 const getOneHandler=  async (recipeId) => {
  // first API because it's more likely to happen this way (thus +performance)
  if (!isNaN(+recipeId)) {
    const { data: apiRecipe } = await axios(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`
    );
    return apiRecipe
  }

  const ourRecipe = await Recipe.findByPk(recipeId, { include: Diet });

  return ourRecipe;
  
};



module.exports = {
  getApiInfo,
  getDbInfo,
  getAllRecipes,
  getOneHandler,
};



