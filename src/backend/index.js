const express = require("express");
const morgan = require("morgan");
const path = require("path");
const testimonioRuta = require("./routes/testimonios");
const db = require("./config/database");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//statis files
app.use(express.static(path.join(__dirname, "public")));

//router
app.use("/testimonios", testimonioRuta);

//Start Server
const server = async () => {
  app.listen(app.get("port"));
  console.log(`Servidor en el puerto ${app.get("port")}`);
  await db.authenticate();
  console.log('Base de datos conectada')
};
server();
