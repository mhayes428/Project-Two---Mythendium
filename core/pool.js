const util = require('util');
const mysql = require('mysql');
require("dotenv").config();
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    // const pool = mysql.createPool({
    //     connectionLimit: 10,
    //     host: 'localhost',
    //     user: process.env.USER_NAME,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE
    // });

    // pool.getConnection((err, connection) => {
    //     if (err)
    //         console.error("Something went wrong connecting to the database ...");

    //     if (connection)
    //         connection.release();
    //     return;
    // });

    // pool.query = util.promisify(pool.query);

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}
connection.connect();


module.exports = connection;