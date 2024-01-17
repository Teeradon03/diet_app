

exports.login = async (req, res) => {
  const data = req.body;
  console.log("login in login body data" ,data);

  if (data.username == 'admin' && data.password == 'admin') {
    console.log("correct");
    req.session.username = data.username;
    console.log("req.session.username", req.session.username);
    // res.send(JSON.stringify({ pass: true }));
  }
  // console.log("req.session.username", req.session.username);  
  res.json('error something ')
};
