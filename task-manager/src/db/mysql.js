const mysql = require('mysql');

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "task-manager",
});


module.exports = conn;


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "task-manager"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//  // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//  //var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//  con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });







// const mysql = require ('mysql');
// //const express = require('express');
// //const app = express();
// //const bodyparser = require('body-parser');
// //app.use(bodyparser.json);

// const host = 'localhost';
// const mysqlConnection = mysql.createConnection({
//     host :'localhost',
//     user : 'root',
//     password :'',
//     database : 'task-manager'
// });

// mysqlConnection.connect((err)=>{
//   if (err) throw err;
//   console.log('Connected successfully');
//   // var sql = "CREATE TABLE customer (name VARCHAR(255) , address VARCHAR(255))";
//   // mysqlConnection.query(sql,(err,result)=>{
//   //    if(err) throw err;
//   //    console.log('Table Created');
//   // })
//   // var sql = "INSERT INTO customer (name,address) values ('pqr','Nasik')";
//   // mysqlConnection.query(sql,(err,result)=>{
//   //     if(err) throw err;
//   //       console.log('Record Inserted');
        
//   //    })


// });
// // var sql = "SELECT * FROM `customer` WHERE address = 'indore'";
// // mysqlConnection.query(sql,(err,result)=>{
// //    if(err) throw err;
// //    console.log(result);
// // });
// // app.listen(3000 , ()=>{
// //     console.log(`Express Server is Running at ${host}:3000`);
// // });
// // app.get("/",(req,res) => {
// //   mysqlConnection.query('SELECT * from users LIMIT 1', (err, rows) => {
// //       if(err) throw err;
// //       console.log('The data from users table are: \n', rows);
// //       connection.end();
// //   });
// // });


// function getPromise()
// {
//     return new Promise(function(resolve, reject) {
//         // The Promise constructor should catch any errors thrown on
//         // this tick. Alternately, try/catch and reject(err) on catch.
        

//         var query_str = "UPDATE customer SET address = 'Mumbai' WHERE name = 'pqr'";
        

       

//         mysqlConnection.query(query_str, function (err, rows, fields) {
//             // Call reject on error states,
//             // call resolve with results
//             if (err) {
//                 return reject(err);
//             }
//             resolve(rows);
//         });
//     });
// }

// getPromise().then(function(rows) {
//     // now you have your rows, you can see if there are <20 of them
// }).catch((err) => setImmediate(() => { throw err; })); // Throw async to escape the promise chain