const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db'); 
const productosRoutes = require('./routes/productosRoutes');

dotenv.config();
connectDB(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
    origin: 'fullfront-production-c9f3.up.railway.app', 
}));
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de productos');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
