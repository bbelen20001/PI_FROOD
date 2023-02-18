const { Router } = require('express');
const dietsRoute = require("../routes/routeDiets.js");
const recipesRoute = require("../routes/routeRecipes.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/diets", dietsRoute);
router.use("/recipes",recipesRoute);//de aqui consulto la Api 


module.exports = router;