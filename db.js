const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.Username,
    password: process.env.Pa$$w0rd,
    server: process.env.addie-azuredb.database.windows.net,
    database: process.env.TmsDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => console.log('Database connection failed', err));

module.exports = {
    sql,
    poolPromise
};