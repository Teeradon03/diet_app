const { User } = require("../models/user");
const axios = require("axios");

exports.loginLine = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const extractedData = Object.keys(data).map((key) => key.split(":")[0]);
    const token = extractedData[0];
    const params = new URLSearchParams();
    params.append("id_token", token);
    params.append("client_id", process.env.CHANNELID);

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const decode = await axios.post(
      "https://api.line.me/oauth2/v2.1/verify",
      params,
      { headers }
    );

    const userLineData = {
      line_user_id: decode.data.sub,
      line_username: decode.data.name,
      line_picture_url: decode.data.picture,
    };

    console.log("User Line Data", userLineData);

    let user = await User.findOne({ line_user_id: decode.data.sub });
    // let user = false

    if (user) {
      console.log("inside if session", req.session.userId);
      // Update the existing user data without changing the userId
      user = await User.findOneAndUpdate(
        { line_user_id: decode.data.sub },
        { $set: { ...userLineData } },
        { new: true }
      );
      // console.log("inside IF");
    } else {
      // Generate a new userId for a new user
      console.log("inside else session", req.session.userId);
      const generateUserId = () => {
        const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
        const timestamp = new Date().getTime();
        const randomBase36 = randomNumber.toString(36);
        const timestampBase36 = timestamp.toString(36);
        return `${randomBase36}${timestampBase36}`;
      };

      // Create a new user document
      const userId = generateUserId();
      user = new User({ ...userLineData, userId });
      await user.save();
    }

    // console.log(req.session.userId);
    
    
    // res.json(`something wrong`);
    // Set userId in the session
    
    // return res.send({ success: true });
    
    req.session.userId = 'user.userId';
    console.log("UserId Session in userController", req.session.userId);
    console.log("logggggggggggggggggggggggggggggggggggggggg");
    console.log("session", req.session.userId);
    res.json(`logged in as ${req.session.userId}`);
  } catch (error) {
    console.error("Error:", error);
    return res.send({ error: "An unexpected error occurred." }).status(500);
  }
};

exports.getUserData = async (req, res) => {
  console.log("UserId Session", req.session.userId);
  
  try {
    var userData = await User.find({});
    console.log(userData);
    res.json(userData);
  } catch (error) {
    console.log("error", error);
    res.json({
      error: error.message,
    });
  }
};
