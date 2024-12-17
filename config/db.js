const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error('La variable MONGO_URI no está definida');
        

        await mongoose.connect(uri);
        console.log('MongoDB conectado correctamente');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
