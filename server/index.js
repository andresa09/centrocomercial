//AQUI SE REQUIERE EL MODULO DE 'ESPRESS' CON (REQUIRE);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const db = require('./database/db');

//EMPEZAMOS A REQUERIR LAS RUTAS (ENDPOINT) AQUI SE DEFINE EN UNA CONSTANTE
const personalRoutes = require('./routes/personalRoutes');

//DEFINIR EXPRESS EN UNA CONSTANTE LLAMADA APP 
const app = express();


//DEFINIR EL PUERTO EN QUE PUERTO VA A ESTAR EL SERVIDOR
const port = 8080

//SE LE DIRA A EXPREES QUE USE LOS MODULOS QUE SE REQUIRIERON
app.use(cors());  //USAR EL CORS ES SGURIDAD ENTRE LA PETICION DE LOS PUERTOS

app.use(bodyParser.urlencoded({ extended:false })); // PARA LEER EL CUERPO DE LA PETICION PARA LEER LO QUE TRAE EL METODO .POST
app.use(bodyParser.json()); //PARA PASAR ESOS DATOS A JSON 

//DEFINIENDO EL ENDPOIND PRINCIPAL Y LE PASAMOS EL MODULO DE ROUTES 
app.use('/ccviva',personalRoutes); //EL SEGUNDO PARAMETRO RECIBE EL MODULO(ARCHIVO) DONDE ESTAN ALMACENADAS LAS RUTAS

app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API :)')
});

app.listen(port, ()=>{
    console.log('server activo en el puerto: ', port)
    db()
});

