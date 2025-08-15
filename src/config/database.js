const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

//karena dbpool bersifat asynchronous
module.exports = dbPool.promise();