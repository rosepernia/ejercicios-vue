const express = require ('express')
const { displayPartsToString } = require('typescript')
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
    let datos=req.body
    /* let telefonos=[]
    for(var i=0;i<datos.leght;i++){
        if (datos[i]==datos.fijo && datos[i]==datos.movil){
            telefonos.push(datos.fijo, datos.movil)
        }
    } */
    daoUsuarios.guardar(datos)
        .then((resp) => {
            res.json({confi:"Usuario guardado con éxito", datos:datos})
        }).catch((err) => {
            console.log(err)
            
        })
})

/* rtApi.get('/listar', async (req, res) => {
    let listaUsuarios = await daoUsuarios.listar()
    res.json({
        mensaje:"Estos son tus usuarios", 
        datos:listaUsuarios
    })
}) */

rtApi.get('/listar', (req, res) =>{
    daoUsuarios.listar()
    .then(usuarios=>{
        res.json(usuarios)
    })
})

rtApi.post('/eliminar', (req, res)=>{
    daoUsuarios.eliminar(req.body.id)
    res.json({respuesta:'ok'})
})

rtApi.post('/login', (req, res)=>{
    daoUsuarios.login(req.body.email,req.body.password)
    .then(data=>{
        res.json(data)
        console.log("login realizado con éxito")
    })
})

module.exports=rtApi