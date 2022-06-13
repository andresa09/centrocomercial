//AQUI DEFINIMOS LAS RUTAS (ENDPOINT)
const personalController = require('../controllers/personalController'); //AQUI SE LLAMAMOS EL CONTROLADOR DE LAS PETICIONES DESDE LA CARPETA 
const express = require('express'); //AQUI SE REQUIERE EXPRESS
const router = express.Router(); //METODO DE EXPRESS

//RUTAS DE LOS REGISTROS 
router.get('/all', personalController.findAllPersonal);
router.get('/findId/:id',personalController.findByIdPersonal);
router.post('/sendRegister',personalController.createPersonal);
router.put('/updateRegister/:id',personalController.updatePersonal);
router.delete('/deleteRegister/:id',personalController.deletePersonal);

module.exports = router;