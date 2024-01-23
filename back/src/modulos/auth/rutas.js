const express = require ("express");

const respuesta = require("../../red/respuesta");
const controlador = require ("./controlador");
const router = express.Router();


router.post("/login", login);

async function login (req, res, next){
    try {
        const token = await controlador.login(req.body.usuario, req.body.password)
        respuesta.success(req, res, token, 200);  
    } catch (err) {
        next(err);   
      }

};

module.exports = router;
