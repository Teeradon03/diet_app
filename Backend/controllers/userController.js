const {User} = require("../models/user");

const jwt = require("jsonwebtoken");
const axios = require("axios");

const channelId = "2002171340"

exports.loginLine = async (req, res) => {
  try {

    const data = req.body;
    console.log("dataaaa", data);
    const extractedData = Object.keys(data).map((key) => key.split(":")[0]);
    // console.log("extractedData", extractedData[0]);
    const token = extractedData[0]
    // const idToken = jwt.decode(extractedData[0]);
    // console.log("idToken",idToken)
    // const userId = idToken.sub;
    // const name = idToken.name;
    // const email = idToken.email;
    // const picture = idToken.picture;
    // console.log("idToken :", idToken);
    // console.log('name :', name)
    // console.log('picture :', picture)
    // console.log('email :', email)
    // console.log('sub or UserId :', userId)

    const params = new URLSearchParams();
    params.append("id_token", token);
    params.append("client_id", channelId);

    // console.log(params)
    
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const decode = await axios.post(
      "https://api.line.me/oauth2/v2.1/verify",
      params,
      headers
    );
    console.log('decode verify', decode.data)
    

    var userLineData = {
      line_user_id: decode.data.sub,
      line_username: decode.data.name,
      line_picture_url: decode.data.picture,
    };
    console.log('userline data', userLineData)

    var user = await User.findOneAndUpdate(
      { line_user_id: decode.data.sub },
      { new: true }
    );
    // // /// some session
    // // req.session.userId = user.line_user_id
    // // console.log('UserId Session',req.session.userId)

    // // console.log('userLineData', userLineData)
    // /// กรณีที่มี user ในระบบแล้ว
    if (user) {
      console.log("User updated");
      res.status(200).send("User updated");

    //   /// กรณีไม่มี user ในระบบให้ทำการสร้างใหม่
    } else {
      user = new User(userLineData);
      await user.save();
      console.log("User saved");
      res.status(200).send("User saved");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.getUserData = async(req,res) => {
    try{
        var userData = await User.find({})
        console.log(userData)
        res.json(userData)
    }
    catch(error){
      console.log('error', error)
      res.json({
        error: error.message
      })
    }
}
