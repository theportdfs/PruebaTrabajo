const mysql = require('mysql');
const config = require("../config");
const { error } = require('../red/respuesta');

const dbconfig = {
    host: "localhost",
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;
function conMysql(){
    conexion = mysql.createConnection(dbconfig)

    conexion.connect((err) => {
        if(err){
            console.log("[db err]", err);
            setTimeout(conMysql,200);
        }else{
            console.log("db conectada")
        }
    } );


    conexion.on("error", err => {
        console.log("[db err]", err);
        if(err.code == "PROTOCOLE_CONNECTION:LOST"){
            conMysql(); 
         }else{
            throw err;
        }
    })
}

conMysql()


function obtenerTodos(tabla){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject (error) : resolve(result);
        })
    })
    
}

function obetenerUno(tabla, id){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} where id=${id}`, (error, result) => {
           return error ? reject (error) : resolve(result);
        })
    })
    
}


function eliminar(tabla, id){
    return new Promise( (resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} where id=${id}`, (error, result) => {
           return error ? reject (error) : resolve(result);
        })
    })
    
}

function agregar(tabla, data){
    return new Promise( (resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error, result) => {
           return error ? reject (error) : resolve(result);
        })
    })
    
}

function query(tabla, consulta){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE ?`, consulta, (error, result) => {
           return error ? reject (error) : resolve(result[0]);
        })
    })
    
}


module.exports = {

    eliminar,
    obetenerUno,
    obtenerTodos,
    eliminar,
    agregar,
    query
}