const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require ("./recipesRouter.js")
const dietsRouter = require ("./dietsRouter")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes",recipesRouter);
router.use("/diets",dietsRouter);

module.exports = router;
