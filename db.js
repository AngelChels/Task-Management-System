const sql = require('mssql');
require('dotenv').config();

//rename your .env_sample file to .env and fill in your database credentials
//for further info: README.md # .env_sample
const sqlConfig = {
    user: process.env.DB_USER,                    
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};



(async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfig);
        const result = await (sql.query`select * from Tms_user`).then(
            () => {console.log('Connected to SQL Server');}, 
            () => {console.log('SQL server connection failed');});
            //console.dir(result)
     
    } catch (err) {
     // ... error checks
     console.log('Database connection failed', err)
    }
   })();
