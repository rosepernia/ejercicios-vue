const express = require('express')
const app = express()
const conexion = require('./conexion')
const rtApi=require('./routers/rtApi')
const rtIdiomas=require('./routers/rtIdiomas')

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//enrutadores
app.use('/api',rtApi)
app.use('/idiomas',rtIdiomas)

//mongoDB
conexion.on('error',console.error.bind(console,'Error al conectar a mongo'))
conexion.once('open',()=>console.log("Conexión con Mongo OK!!"))


app.listen(8081,(err)=>{
    if(err) console.log("Errores: ", err)
    console.log("Servidor arrancado en puerto 8081")
})

