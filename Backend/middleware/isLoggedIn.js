

const isLoggedIn = (req, res, next) => {
  // console.log(req.cookies)
  console.log("req.session.userId in middd", req.session.userId);
  console.log('req.session', req.session)
  if (req.session && req.session.userId) {
    next();
    return;
  }
  res.status(401).send({ permission: false });
  // console.log('NEXT!!!')
  // next();
};

module.exports = { isLoggedIn };