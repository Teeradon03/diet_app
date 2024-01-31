const { User } = require("../models/user");
const axios = require("axios");

const loginLine = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    const extractedData = Object.keys(data).map((key) => key.split(":")[0]);
    const token = extractedData[0];
    // console.log("asdasasfsdddddddd", token);
    const params = new URLSearchParams();
    params.append("id_token", token);
    params.append("client_id", process.env.CHANNELID);

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // console.log("before decode");
    const decode = await axios.post(
      "https://api.line.me/oauth2/v2.1/verify",
      params,
      { headers }
    );
    // console.log("decode", decode);
    const userLineData = {
      line_user_id: decode.data.sub,
      line_username: decode.data.name,
      line_picture_url: decode.data.picture,
    };
    // console.log('userlinedata', userLineData)

    const generateUserId = () => {
      const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
      const timestamp = new Date().getTime();
      const randomBase36 = randomNumber.toString(36);
      const timestampBase36 = timestamp.toString(36);
      return `${randomBase36}${timestampBase36}`;
    };




    let user = await User.findOne({ line_user_id: decode.data.sub });
    if (user) {
      // Update the existing user data without changing the userId
      user = await User.findOneAndUpdate(
        { line_user_id: decode.data.sub },
        { $set: { ...userLineData } },
        { new: true }
      );
      req.session.userId = user.userId;
      console.log("User Updated");
      let payload = {
        user: {
          userId: req.session.userId,
          role: user.role,
          name: user.line_username
        }
      }
      console.log('session', req.session.userId)
      res.json(payload);

    } else {
      // Create a new user document
      const userId = generateUserId();
      // console.log(req.session.userId);
      user = new User({ ...userLineData, userId });
      console.log(user)
      await user.save();
      console.log("User Created");
      req.session.userId = user.userId;
      let payload = {
        user: {
          session: req.session.userId,
          role: user.role,
          name: user.line_username
        }
      }
      console.log('session', req.session.userId)
      res.json(payload);
    }
    // console.log(req.session.userId);

    // res.json({
    //   session: req.session.userId,
    //   data: user
    // });
  
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateUserData = async (req, res) => {
  console.log("update user data session", req.session.userId);

  try {
    const data = req.body;
    // console.log('data', data)
    const userId = await User.findOne({ userId: req.session.userId });
    // console.log('userId', userId)

    if (userId.userId == req.session.userId) {
      const dateOfBirth = data.dateOfBirth;
      // console.log('dataofbirth', dateOfBirth)
      const updateUser = await User.findOneAndUpdate(
        { userId: req.session.userId },
        { $set: { ...data, dateOfBirth: dateOfBirth } },
        { new: true }
      );
      // console.log('updateUser', updateUser)
      console.log("updated Ohh Yeahhh!!!!");
    }
    console.log("data", data);
    res.json({
      data: data,
    });
  } catch (error) {
    console.log(" Error", error.message);
    res.json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  console.log("session in get user data", req.session.userId);
  // res.send(`hello ${req.session.userId}`);

  // console.log("UserId Session", req.session.username);
  try {
    var userData = await User.find({});
    console.log(userData);
    res.json(userData);
    console.log("UserId Session", req.session.userId);
  } catch (error) {
    console.log("error", error);
    res.json({
      error: error.message,
    });
  }
};

const currentUser = async(req,res) => {
    try{
      console.log('current User seessss', req.body)

      const currentUser = await User.findOne({userId: req.body.userId})
      console.log('current user', currentUser)
      res.send(
        currentUser
      )
    }
    catch(error){
      console.log('error', error.message)
    }
}

module.exports = {
  loginLine,
  getUserData,
  updateUserData,
  currentUser
};