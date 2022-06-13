//AQUI ESTA TODA LA CONEXION A LA BASE DE DATOS 
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://andres09:123456789.a@cluster0.bijc3zy.mongodb.net/centrocomercial';


const db = async ()=>{
    await mongoose.connect(MONGO_URL)
    .then(()=> console.log('CONEXION EXITOSA A MONGO DB'))
    .catch(error =>console.error(error) ) 
}

module.exports = db;