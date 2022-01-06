const express = require('express');
const router = new express.Router();
const conn = require('../db/mysql');
const auth = require('../middleware/auth');
const multer = require('multer');
router.get('/test',(req,res)=>{
    res.send('This is from router-user.js File');
})
const { sendWelcomeEmail } = require('../emails/account');


router.get("/create",(request,response)=>
{
    let sql = "SELECT * FROM customers ";
    let query = conn.query(sql,(err,result)=>{
          if(err) throw err;
          response.send(JSON.stringify({
              status : 200,
              error : null,
              response: result
          }))
    })
});

router.get("/user/:id",(request,response)=>{
    console.log(request.params);
    const req_id = request.params.id;
    let sql = "SELECT * FROM customers WHERE id =  " +req_id;
    let query = conn.query(sql,(err,result)=>{
    if(err) throw err;
    response.send(JSON.stringify({
        status: 200, error: null, response:result
    }))
    })
});

SelectAllElements = () =>{
  return new Promise((resolve, reject)=>{
      conn.query('SELECT * FROM customers ' ,  (error, elements)=>{
          if(error){
              return reject(error);
          }
          return resolve(elements);
      });
  });
};


router.get('/asyn', async (req, res, next)=>{
  try {
      const resultElements = await SelectAllElements();
      res.status(200).json({elements: resultElements}); // send a json response
  } catch(e) {
      console.log(e); // console log the error so we can see it in the console
      res.sendStatus(500);
  }
});

DeleteElements = (id) =>{
  return new Promise((resolve, reject)=>{
      conn.query('DELETE FROM customers WHERE id =' +id ,  (error, elements)=>{
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

const upload = multer({
  dest : 'avatars',
  limits : {
      fileSize :1000000
  },
  fileFilter(req,file,cb) {
    //   if(!file.originalname.endsWith('pdf'))
    //   {
    //    return cb(new Error('Please Provide PDF files'))
    //   }
    if(!file.originalname.match(/\.(doc|docx|jpg|jpeg|png|pdf)$/))
    {
        return cb(new Error('please upload word document/jpg/jpeg/png/pdf '))
    }
      cb(undefined,true)
//   cb(new Error('file must be a pdf'))
//   cb(undefined, true),
//   cb(undefined, false)
  }
});

router.post('/users/me/avatar',upload.single('upload'),(req,res)=>{
    res.send();
},(error,req,res,next)=>{
    res.status(400).send({error: error.message})
})


module.exports = router 