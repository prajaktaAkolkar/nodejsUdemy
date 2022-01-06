const express = require('express');
const router = new express.Router();
const conn = require('../db/mysql');


DeleteElements = (id) =>{
    return new Promise((resolve, reject)=>{
        conn.query(' DELETE FROM customers WHERE id =' +id ,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
  };
  
  router.delete('/del/:id',async(req,res,next)=>{
    try{
  const resultEl = await DeleteElements(req.params.id);
  
  res.status(200).json({ elements: resultEl}); // send a json response
  } catch(e) {
    console.log(e); // console log the error so we can see it in the console
    res.sendStatus(500);
  }
  })
  

  module.exports = router;