const User = require("../models/user");

const jwt = require("jsonwebtoken");

exports.loginLine = async(req, res) => {
    try {
    const token = req.body;
    // console.log("token", token);
    const extractedData = Object.keys(token).map(key => key.split(':')[0]);
    // console.log("extractedData", extractedData);
    const decoded = jwt.decode(extractedData[0]);
    const userId = decoded.sub
    const name = decoded.name
    const email = decoded.email
    const picture = decoded.picture
    // console.log("decoded :", decoded);
    // console.log('name :', name)
    // console.log('picture :', picture)
    // console.log('email :', email)
    // console.log('sub or UserId :', userId)

    var userLineData = {
        line_user_id: userId,
        line_username: name,
        line_picture_url: picture,
        line_email: email
    }
    // console.log("userLineData", userLineData)
    var user = await User.findOneAndUpdate({line_user_id: userId}, {new: true})
    // /// some session
    // req.session.userId = user.line_user_id
    // console.log('UserId Session',req.session.userId)

    // console.log('userLineData', userLineData)
    /// กรณีที่มี user ในระบบแล้ว
    if (user){
        console.log("User updated")
        res.status(200).send("User updated")

    /// กรณีไม่มี user ในระบบให้ทำการสร้างใหม่
    }else{
        user = new User(userLineData);
        await user.save()
        console.log("User saved")
        res.status(200).send("User saved")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

// exports.getLineUserData = (req,res) => {
//     try{

//     }
// }
