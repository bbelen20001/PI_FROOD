const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
       title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.STRING,
      
      },
    
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://media.istockphoto.com/id/1217629948/es/vector/icono-de-l%C3%ADnea-de-color-del-libro-culinario-una-referencia-de-cocina-que-contiene-recetas.jpg?s=612x612&w=0&k=20&c=X1-sFxMvCs1nUcG491puAbl9KKXq7I0FegLNERYoDMg="
      },
      summary:{
        type : DataTypes.TEXT,    
        allowNull: false
      },
      analyzedInstructions:{
        type : DataTypes.TEXT,
      },
      createdInDb:{                                  // esta propiedad la van a tener solo las comidas que esten en la BD
        type : DataTypes.BOOLEAN,                    // por lo que es mas facil buscarlas 
        allowNull: false,
        defaultValue: true
      }
    },
    { timestamps: false }
  );
};