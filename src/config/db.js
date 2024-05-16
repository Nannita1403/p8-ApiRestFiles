const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado OK con la BBDD");
    } catch (error) {
        console.log("Error en la conexion con la BBDD");
    }
}

module.exports = {connectDB}