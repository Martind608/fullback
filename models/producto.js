const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    marca: { type: String, required: true, trim: true },
    categoria: { type: String, required: true, trim: true },
    descripcionCorta: { type: String, required: true, maxlength: 500 },
    descripcionLarga: { type: String, maxlength: 500 },
    envioSinCargo: { type: Boolean, default: false },
    edadDesde: { type: Number, min: 0 },
    edadHasta: { type: Number, min: 0 },
    foto: { type: String, required: true } // URL o path de la imagen
});

module.exports = mongoose.model('Producto', productoSchema);
