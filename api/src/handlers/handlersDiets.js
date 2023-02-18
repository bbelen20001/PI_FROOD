const { diets } = require("../controllers/dietControllers");
const {Diet} = require('../db');
const getAllDiets = async (req, res) => {
     //console.log(diets);
     diets.forEach(e => {
      Diet.findOrCreate({
          where: {name:e.name}
      })
  })

   const allTheTypes = await Diet.findAll();
  res.send(allTheTypes.map(e => e.name))
}

module.exports = {
  getAllDiets,
};
