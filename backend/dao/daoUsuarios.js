const Usuario = require('../models/Usuario')
let daoUsuarios = {}

//aquí le meto como parámetro lo que me llega en el body (usuario)
daoUsuarios.guardar = function guardar(usuario) {
    console.log(usuario)
    return new Promise((resolved, reject) => {
        let u = new Usuario(usuario)
        u.save()
            .then(() => {
                resolved(u)
            })
            .catch(err => reject(err))
    })
}

daoUsuarios.listar=function listar(){
    return new Promise((resolved, reject) => {
        resolved(Usuario.find().lean())
    })
}


daoUsuarios.eliminar = function eliminar(id){
    /* console.log("Estoy en dao: ", id) */
    Usuario.findOneAndRemove({_id:id},(data)=>{
        console.log("registro eliminado")
    })
}

//logear usuarios
daoUsuarios.login = function login(email, password) {
    return new Promise((resolved, reject) => {
        Usuario.findOne({ email: email })
            .then(data => {
                if (data) {//he encontrado un usuario
                    if (data.password == password)
                        resolved(data)//el password coincide
                    else
                        resolved(null)//el password no coincide
                } else
                    resolved(null)
            })
    })
}

module.exports = daoUsuarios