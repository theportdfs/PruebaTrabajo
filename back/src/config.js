require ("dotenv").config();

module.exports = {
    app: {
        port: process.env.port ||4000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecreta'
    },
    mysql: {
        host: process.env.MYSQL_HOST || "localhost" || "127.0.0.1",
        user: process.env.MYSQL_USER || "pruebanodejs",
        password: process.env.MYSQL_PASSWORD || "pruebanodejs",
        database: process.env.MYSQL_DB || "pruebanodejs",
        root_password: process.env.MYSQL_ROOT_PASSWORD || "pruebanodejs"
    
    }
}