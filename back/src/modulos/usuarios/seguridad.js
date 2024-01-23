const auth = require('../../authjwt/index')

module.exports = function chequearAuth(){
    function middleware(req, res, next){
        auth.chequearToken.confirmarToken(req)
            next()
    }
    return middleware
}