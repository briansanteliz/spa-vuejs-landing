const Testimonio = require("../model/Testimonio");

exports.testimonioControllerPost = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const response = await Testimonio.create({
    nombre,
    correo,
    mensaje,
  });
  if (response) {
    res.status(200).json({ message: "Guardado correctamente", data: response });
  } else {
    res.json({ message: "Todos los datos son necesarios" });
  }
};
