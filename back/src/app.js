//Express basicamente es el servidor, se importan las librerías y modulos con una constante y la paralabre "requiere" que es de donde proviene el archivo
const express = require('express');
const morgan = require('morgan');
const app = express();
const error = require("./red/error");
app.set('json spaces', 2);
const cookieParser =  require('cookie-parser');
const cors = require('cors')


//Nos permite ver las peticiones desde la consola (util para validar errores)
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.use(cors({origin:'*', credentials:true, optionsSuccessStatus:200}))
//Routes
// const cuentas = require('./cuentas/rutas')

app.use('/clientes',  require("./modulos/clientes/rutas"))
app.use('/usuarios',  require("./modulos/usuarios/rutas"))
app.use('/auth',  require("./modulos/auth/rutas"))
app.use(error);
//para exportar modulos (archivos), se pone el "module.exports" y se iguala a lo que se quiera exportar
module.exports = app;