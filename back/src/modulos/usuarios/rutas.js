const express = require ("express");

const respuesta = require("../../red/respuesta");
const controlador = require ("./controlador");
const router = express.Router();
const seguridad = require('./seguridad')

router.get("/todos", obtenerTodos);
router.get("/uno/:id", obetenerUno);
router.post("/eliminar", eliminar);
router.post("/actualizar_agregar", agregar);

async function obtenerTodos (req, res, next){
    try {
        const items = await controlador.todos(req.params.id)
        respuesta.success(req, res, items, 200);  
    } catch (err) {
        next(err); 
        }
};
async function obetenerUno (req, res, next){
    try {
        const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200);  
    } catch (err) {
        next(err);   
      }

};

async function eliminar (req, res, next){
    try {
        const items = await controlador.eliminar(req.body)
        respuesta.success(req, res, "item eliminado satisfactoriamente", 200);  
    } catch (err) {
        next(err); 
    }

};

async function agregar (req, res, next){
    try {
        const items = await controlador.agregar(req.body)
        if(req.body.id ==0){
            mensaje = "item guardado con exito";
        }else{
            mensaje = "item actualizado con exito";
        }
        respuesta.success(req, res, mensaje, 201);  
    } catch (err) {
        next(err); 
    }

};
module.exports = router;
