const {
  getAllRecipes,
  getOneHandler,
} = require("../controllers/recipeControllers.js");
const { createRecip } = require ("../controllers/CreateRecipe");

const searchRecipes = async (req, res) => {
  // para las queries
  //Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  //Si no existe ninguna receta mostrar un mensaje adecuado
  try {
    const title = req.query.title;

    const recipesTotal = await getAllRecipes();
    if (title) {
      const recipesTitle = await recipesTotal.filter((element) =>
        element.title.toLowerCase().includes(title.toLowerCase())
      );
      recipesTitle.length
        ? res.status(200).send(recipesTitle)
        : res.status(200).send("Title not exit");
    } else {
      res.status(200).json(recipesTotal);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//---------------------------------
const recipeId = async (req, res) => {
  //Para el detalle por id

  try {
    const id = req.params.id
   const source = await getAllRecipes ();
    const recipe = source.find (element=> element.id == id );
    if(recipe){
      res.status(200).json(recipe);
    }else{
      res.status(404).json({ error:"Recipe not found"});
    }
    
  } catch (error) {
    res.status(404).json({ error: error.message });
    }
  };

  const createRecipes = async (req,res)=>{
    try{
      const newRecip = await createRecip(req.body);
      res.status(201).json(newRecip);
    }catch(error){
      res.status(500).json({error: error.message});
    }
  };
 const searchOne = async (req, res)=>{
  try{
    const id = req.params.id 
    const source = await getOneHandler (id);
    res.status(200).json(source);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
 }
 


// constc = async (req, res) => {
//   const {
//     title,
//     summary,
//     healthScore,
//     analyzedInstructions,
//     diets,
//   } = req.body;

//   try {
//     const newRecipe = await createRecip(
//       title,
//       summary,
//       healthScore,
//       analyzedInstructions,
//       diets,
//     );
//     res.status(201).send("Creado con exito!");
//   } catch (error) {
//     // if (!name) return res.status(400).send("Missing name");
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  searchRecipes,
  recipeId,
  createRecipes,
  searchOne
};
