const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        console.log('MONGO_URI:', process.env.MONGO_URI); // Esto imprime el valor de MONGO_URI
        if (!process.env.MONGO_URI) {
            throw new Error('La variable MONGO_URI no está definida');
        }
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado correctamente');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        process.exit(1);
    }
};
