
const { request, response } = require('express');
const express = require('express');
const app= express();
const conn = require('./db/mysql');;
const port = process.env.PORT || 3000;
const userRouter = require('./routers/user');
const deleteRouter = require('./routers/delete');
app.use(userRouter);
app.use(deleteRouter);
app.use(express.json());
const auth = require('./middleware/auth');
// app.post('/user',(req,res)=>{
//     console.log(req.body); 
// res.send('Testing!!!');
// })
 const router = new express.Router();
app.use(router);
router.get('/task',(req,res)=>{
res.send('from other router')
});
const { sendWelcomeEmail } = require('../src/emails/account');

app.post("/create",(request,response)=>{
    let data = { 
      name : request.body.name ,
      address :request.body.address,
    
    }
    let sql= "INSERT INTO customers SET ? ";
    let query =conn.query(sql,data,(err,result)=>{
      if(err) throw err;
      response.send(JSON.stringify({status : 200 , error: null , response : "New Recordadded Successfully"}));
    })
  });

  app.post("/create/:email",(request,response)=>{
    
    let data = { 
      name : request.body.name ,
      address :request.body.address,
    
    }
    sendWelcomeEmail(request.params.email,data.name)
    let sql= "INSERT INTO customer SET ? ";
    let query =conn.query(sql,data,(err,result)=>{
      if(err) throw err;
      response.send(JSON.stringify({status : 200 , error: null , response : "New Recordadded Successfully"}));
    })
  });
 
app.listen(port,()=>{
console.log('Server is up on port ' + port)
})


const bcrypt = require('bcryptjs');
const myfunction = async()=>{
const password = 'read123';
const hashpassword = await bcrypt.hash(password,2);
console.log(password);
console.log(hashpassword);

const isMatch= await bcrypt.compare('read23',hashpassword);
console.log(isMatch);
}

myfunction()

const jwt = require('jsonwebtoken');
const myfunc = async()=>{
  const token = jwt.sign({_id: 'abc123'},'thisismytoken', {expiresIn:'7 week'});
  console.log(token);

  const data = jwt.verify(token,'thisismytoken');
  console.log(data);
}
myfunc();

const multer = require('multer');
const upload = multer({
  dest : 'images',
  fileFilter(req,file,cb) {
    if(!file.originalname.match(/\.(doc|docx)$/))
    {
          return cb(new Error('Please Upload Word document'))
    }
    cb(undefined,true)

  }
});




app.post('/upload',upload.single('upload'), (req,res)=>{
  res.send();
},(error,req,res,next)=>{
  res.status(400).send({error : error.message})
})