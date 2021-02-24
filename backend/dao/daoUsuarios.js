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

module.exports = daoUsuarios