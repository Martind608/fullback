const Producto = require('../models/producto');

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error });
    }
};

// Obtener un producto por ID
const getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el producto', error });
    }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, stock } = req.body;
        if (!nombre || !precio || !stock) {
            return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
        }
        if (precio < 0 || stock < 0) {
            return res.status(400).json({ mensaje: 'El precio y el stock no pueden ser negativos' });
        }

        const producto = new Producto(req.body);
        await producto.save();
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el producto', error });
    }
};

// Actualizar un producto existente
const actualizarProducto = async (req, res) => {
    try {
        const { precio, stock } = req.body;

        if (precio !== undefined && precio < 0) {
            return res.status(400).json({ mensaje: 'El precio no puede ser negativo' });
        }
        if (stock !== undefined && stock < 0) {
            return res.status(400).json({ mensaje: 'El stock no puede ser negativo' });
        }

        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).json({ mensaje: 'Producto no encontrado' });

        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el producto', error });
    }
};


// Eliminar un producto
const eliminarProducto = async (req, res) => {
    try {
        console.log('Intentando eliminar producto con ID:', req.params.id); // Agrega esto
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            console.log('Producto no encontrado');
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        console.log('Producto eliminado con éxito');
        res.json({ mensaje: 'Producto eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
    }
};

module.exports = {
    getProductos,
    getProductoById,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
