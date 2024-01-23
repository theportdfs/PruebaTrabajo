const db = require("../../db/mysql");
const bcrypt = require('bcrypt');
const auth = require('../../authjwt/index')

const TABLA =  "auth";

async function login(usuario, password){

    const data = await db.query(TABLA, {usuario: usuario})
    return bcrypt.compare(password, data.password)
                .then( resultado => {
                    if(resultado === true){
                            return auth.asignarToken({...data})
                    }else{
                        console.log(password)
                        console.log(data.password)
                        throw Error('Informacion invalida')
                    }

                })
}

async function agregar(data) {

    const authData = {
        id: data.id
    }

    if(data.usuario){
        authData.usuario = data.usuario
    }
    if(data.password){
        authData.password = await bcrypt.hash(data.password, 10)
    }
    return db.agregar(TABLA, authData);

}

module.exports = {
    agregar,
    login
}