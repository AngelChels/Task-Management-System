const sql = require('mssql');

const sqlConfig = {
    user:     'Username',                                                           //process.env.DB_USER,
    password: 'Pa$$w0rd',                                                           //process.env.DB_PASSWORD,
    server:   'addie-azuredb.database.windows.net',                                 //process.env.DB_SERVER,
    database: 'TmsDatabase',                                                                      //process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

(async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfig);
     const result = await sql.query `select * from Tasks`;
     console.dir(result);
    } catch (err) {
        console.error(err);
    }
   })();
