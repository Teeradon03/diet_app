


exports.isLoggedIn = (req, res, next) => {
  
  console.log('req.session.userId in middd',req.session.userId)
  if (!req.session.userId) {
    
    console.log('You are not log in')
    return res.status(403).send('Access denied');
  }
  next();
}

