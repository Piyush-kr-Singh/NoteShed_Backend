const { config } = require('dotenv');
const mysql=require('mysql2');
const Process=config();

const conn=mysql.createConnection({
    user : "root",
    host : "localhost",
    password : process.env.PASSWORD,
    database : "crudmysql"  

});

conn.connect((err)=>
{
    if(err) throw err;
    console.log("Database connected successfully");
});

module.exports =conn;