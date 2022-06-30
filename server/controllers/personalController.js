//ES DONDE VAN A ESTAR LA FUNCIONES QUE DEFINEN LAS PETICIONES HTTP (CRUD)
const mongoose = require('mongoose');
const express = require('express');
const Personal = require('../models/personalModel'); //ACA SE LLAMA LO QUE ESTA EN EL ARCHIVO MODEL (EL ESCHEMA)



//CREAR LOS METODOS C- R - U - D 

//METODO PARA ENCONTRAR TODOS LOS REGISTROS DE LA BD //find=encontrar  All=todo
//&& OPERADOR LOGICO VALIDA SI EL PRIMER VALOR ES VERDADERO Y SI LO ES DEVOLVERA COMO RESPUESTA EL SEGUNDO VALOR SIGNIFICA SI ES VERDADERO (BUSCAR QUE ES UN OPERADOR)
const findAllPersonal = (req,res)=>{
    Personal.find((err,result)=>{
        //  status 500 si hay un error y si no un 200 con el json
        err && res.send(500).send(err.message);

        res.status(200).json(result)
    })
}



//METODO PARA ENCONTRAR POR ID 

const findByIdPersonal = (req,res)=>{
    Personal.findById(req.params.id,(err,result)=>{
        err && res.send(500).send(err.message);

        res.status(200).json(result)
    })
}



//METODO CREA UN REGISTRO (AÑADIR)(POST)

const createPersonal =(req,res)=>{
    let PersonalNew = new Personal({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        cargo: req.body.cargo
    })



    
    PersonalNew.save((err,personalNew)=>{
        err && res.status(500).send(err.message)

        res.status(200).json(personalNew)
    })

}


//METODO PARA ACTUALIZAR REGISTRO (EDITAR)(PUST)
const updatePersonal =(req,res)=>{
    Personal.findOneAndUpdate({_id:req.params.id},{
        $set:{
            "nombre":req.body.nombre,
            "apellido":req.body.apellido,
            "documento":req.body.documento,
            "cargo":req.body.cargo
        }

    })

        //SI TODO SALE BIEN ENVIA STATUS 200
        .then(result=>{
            res.status(200).json({
                registro_actualizado:result
            })
        })

        //SI HAY UN ERROR CAPTURA EL ERROR Y MUESTRA POR CONSOLA STATUS 500
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
}



//METODO PARA ELIMINAR 

const deletePersonal = (req,res)=>{
    Personal.deleteOne({_id:req.params.id})

    .then(result=>{
        res.status(200).json({
            message: 'REGISTRO ELIMINADO EXITOSAMENTE',
            result:result 
        })
    })

    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}


module.exports = {findAllPersonal,findByIdPersonal,createPersonal,updatePersonal,deletePersonal}


