const express = require('express');
const router = express.Router();
const {
    getProductos,
    getProductoById,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productosController');

// Rutas CRUD
router.get('/', getProductos);                  // Obtener todos los productos
router.get('/:id', getProductoById);            // Obtener producto por ID
router.post('/', crearProducto);                // Crear un nuevo producto
router.put('/:id', actualizarProducto);         // Actualizar producto existente
router.delete('/:id', eliminarProducto);        // Eliminar producto

module.exports = router;
