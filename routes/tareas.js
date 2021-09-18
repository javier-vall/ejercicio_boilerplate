const express = require('express');
const tareasController = require('../controllers/tareasController')
const router = express.Router();

// /api/tareas/<-----

router.post("/", tareasController.crearTarea)
router.get("/", tareasController.leerTareas)

module.exports = router;