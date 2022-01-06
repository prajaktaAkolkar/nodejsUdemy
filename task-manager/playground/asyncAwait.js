const conn = require('../src/db/mysql');


queryPromise1 = () =>{
    return new Promise((resolve, reject)=>{
        query1 = "SELECT * FROM customer";
        conn.query('query1',  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};
 
queryPromise2 = () =>{
    return new Promise((resolve, reject)=>{
        query2 = "SELECT * FROM customers";
        pool.query('query2',  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};
 
// queryPromise3 = () =>{
//     return new Promise((resolve, reject)=>{
//         pool.query('query3',  (error, results)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(results);
//         });
//     });
// };
 
 
async function sequentialQueries () {
 
const promise1= queryPromise1();
const promise2= queryPromise2();
//const promise3= queryPromise3();
 
const promises =[promise1, promise2];
 
try{
const result = await Promise.all(promises);
 return result
// you can do something with the result
 
} catch(error){
console.log(error)
}
}