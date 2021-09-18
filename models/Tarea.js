const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Tarea", TareaSchema);