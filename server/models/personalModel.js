//CONTIENE EL MODELO DE LA BASE DE DATOS 

const {model,Schema} = require('mongoose'); //los corchetes sirven para destructurar la libreria solo los metodos a utilizar

//CREAR ESQUEMA DEL PERSONAL
const PersonalSchema = new Schema({
    nombre: { type: String,required:true },
    apellido: { type: String,required:true },
    documento: { type: String,required:true },
    cargo: { type: String,required:true },
})

module.exports = Personal = model('personal', PersonalSchema);