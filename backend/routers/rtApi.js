const express = require ('express')
const rtApi =  express.Router()
const daoUsuarios = require('../dao/daoUsuarios')
const Usuario = require('../models/Usuario')

rtApi.get('/welcome',(req,res)=>{
    res.json({saludo:"Holiiii"})
})

/* rtApi.post('/nuevo',(req,res)=>{
    let datos=req.body
    console.log("Esto llega desde el cliente: ", datos)
    res.json({respuesta:"Datos recibidos", datos:datos})
  
}) */
rtApi.get('/nuevo',(req,res)=>{
    res.json({saludo:"Estoy en nuevo"})
})

rtApi.post('/nuevo', (req, res) => {
    console.log(req.body)
    daoUsuarios.guardar(req.body)
        .then((resp) => {
            res.json({mensaje:"Usuario guardado con éxito"})
        }).catch((err) => {
            console.log(err)
            
        })
})



module.exports=rtApi