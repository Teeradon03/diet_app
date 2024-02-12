
const { User } = require('../models/user')

const isLoggedIn = (req, res, next) => {

  
  if (req.session && req.session.userId) {
    req.sessionId = req.session.userId
    next();
    return;
  }
  res.status(401).send({ permission: false });

};


const adminCheck =  async(req,res, next) => {
  try{  

    const adminCheck = await User.findOne({userId: req.session.userId})
    if (adminCheck.role !== 'admin'){
      res.status(403).send('Access Denied!!!')
    }
    else{
      next()
    }
  }
  catch(error){
    console.log('error', error.message)
    res.status(403).send("Access Denied!!!")
  }

}

module.exports = { 
  isLoggedIn,
  adminCheck
 };