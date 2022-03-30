import { append } from 'express/lib/response';
import mysql from 'mysql2/promise';

// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'test' });

// // simple query
// connection.query(
//     'SELECT * FROM `users` ',
//     function (err, results, fields) {
//         console.log('>>> check mysql')
//         console.log(results); // results contains rows returned by server
//         let rows = results.map((row) => { return row });
//         console.log(rows); // results contains rows returned by server
//     }
// );

export default pool;