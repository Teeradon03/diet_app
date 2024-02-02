
const { User } = require('../models/user')

const isLoggedIn = (req, res, next) => {
  // console.log(req.cookies)
  console.log("req.session.userId in middd", req.session.userId);
  console.log('req.session', req.session)
  
  if (req.session && req.session.userId) {
    req.sessionId = req.session.userId
    next();
    return;
  }
  res.status(401).send({ permission: false });
  // console.log('NEXT!!!')
  // next();
};


const adminCheck =  async(req,res, next) => {
  try{  
    console.log('session id in admin check :', req.session)

    const adminCheck = await User.findOne({userId: req.session.userId})
    console.log('admin Check ', adminCheck)
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