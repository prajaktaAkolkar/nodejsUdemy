const jwt = require('jsonwebtoken');
const user = require('../routers/user');


const auth = async(req,res,next)=>{
try{
const token = req.header('Authorisation').replace('Barere','');
console.log(token);
}
catch(e) {
  res.status(401).send({error: 'Please authoried'});
}
}

module.exports = auth;