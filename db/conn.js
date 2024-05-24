const { config } = require('dotenv');
const mysql=require('mysql2');
config();

const conn=mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "7352675671Piyush@",
    database : "crudmysql"  

});

conn.connect((err)=>
{
    if(err) throw err;
    console.log("Database connected successfully");
});

module.exports =conn;