const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [10, 150],
        },
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [10, 120],
        },
        unique: true,
      },

      salud: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 100,
          isNumeric: true,
        },
      },
      steps: {
        type: DataTypes.STRING,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      ingredientsLis: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
