const mongoose = require("mongoose")
const { Schema } = mongoose

 /* const telefonos = new Schema({  
    movil: {
       type:String
    },
   fijo:  {
       type:String
    } 
  })   */
const schemaUsuario = new Schema({
    nombre: {
        type: String,
        /* required: [true, 'El nombre es necesario'] */
    },
    apellido: {
        type: String,
       /*  required: [true, 'El nombre es necesario'] */
    },
     telefono: [{fijo:String, movil:String}] 
   /*  telefono: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Telefono'
    }] */
})

class Usuario{

   
}

schemaUsuario.loadClass(Usuario)
module.exports = mongoose.model('Usuario', schemaUsuario)