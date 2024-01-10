

exports.isLoggedIn = (req, res, next) => {
  console.log("req.session.userId in middd", req.session.userId);
  console.log('req.session.userId', req.session.userId)
  if (req.session && req.session.userId) {
    next();
    return;
  }
  res.status(401).send({ permission: false });
  // console.log('NEXT!!!')
  // next();
};
