const Tarea = require('../models/Tarea');

exports.crearTarea = async (req, res) => {
  try {
    // Crear nueva tarea
    const tarea = new Tarea(req.body)
    tarea.save();
    res.json(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
}

exports.leerTareas = async (req, res) => {
  try {
    const tarea = new Tarea();
    tarea.find();
    res.json(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un Error')
  }
}

/*
{
  descripcion: 'Bañar al perro.',
}
*/