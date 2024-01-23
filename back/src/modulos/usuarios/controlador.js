const db = require("../../db/mysql");
const auth = require('../auth/controlador')

const TABLA =  "usuarios";

function todos () {
        return db.obtenerTodos(TABLA);
}
function uno(id) {
    return db.obetenerUno(TABLA, id);
}

function eliminar(body) {
    return db.eliminar(TABLA, body);
}

async function agregar(body) {
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            activo: body.activo
        }

        const respuesta = await db.agregar(TABLA, usuario)

        let insertId = 0

        if(body.id == 0){
            insertId = respuesta.insertId
        }else {
            insertId = body.id
        }
        let respuesta2 = ''
        if(body.usuario || body.password){
         respuesta2 = await auth.agregar({
            id: insertId,
            usuario: body.usuario,
            password: body.password
          })
        }

    return respuesta2
}

module.exports = {
    todos,
    uno,
    eliminar,
    agregar
}