const Sequelize = require("sequelize");
const db = require("../config/database");

//Definiando el modelo
const Testimonios = db.define("testimonios", {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimonios;
