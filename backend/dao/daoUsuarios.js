const Usuario = require('../models/Usuario')
let daoUsuarios = {}


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

module.exports = daoUsuarios