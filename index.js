const express = require('express');
const conectarDB = require('./config/db');

// Crear Servidor
const app = express();

// Conectar a la Base de Datos
conectarDB();

// Habilitar express.json
app.use(express.json({extended: true}));

// Puerto de la app
const PORT = process.env.PORT || 3000;

// Importar Rutas
app.use("/api/tareas", require("./routes/tareas"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})