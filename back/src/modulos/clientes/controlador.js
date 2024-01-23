const db = require("../../db/mysql");

const TABLA =  "clientes";

function todos () {
        return db.obtenerTodos(TABLA);
}
function uno(id) {
    return db.obetenerUno(TABLA, id);
}

function eliminar(id) {
    return db.eliminar(TABLA, id);
}

function agregar(body) {
    return db.agregar(TABLA, body);
}

module.exports = {
    todos,
    uno,
    eliminar,
    agregar
}