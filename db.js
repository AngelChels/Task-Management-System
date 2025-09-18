const sql = require('mssql');
require('dotenv').config();

//rename your .env_sample file to .env and fill in your database credentials
//for further info: README.md ---- #.env_sample
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
        //connect and test the connection by reading a table.
     await sql.connect(sqlConfig);
        const result = await (sql.query`select * from Tms_user`).then(
            () => {console.log('Connected to SQL Server');}, 
            () => {console.log('Unable to test SQL connection');});   // *To be removed after review  
    } catch (err) {                                                   // we should deal with the timeout error
        if (err.code=='ETIMEOUT'){
            console.log('Connection timed out')
        }else{
            console.log('Database connection failed, Check that the supplied credentials are correct')
        }
    }
   })();
