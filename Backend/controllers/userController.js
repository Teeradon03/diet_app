const { User } = require("../models/user");
const axios = require("axios");


exports.loginLine = async (req, res) => {
  try {
    const data = req.body;
    console.log("dataaaa", data);
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
      headers
    );
    
    var userLineData = {
      line_user_id: decode.data.sub,
      line_username: decode.data.name,
      line_picture_url: decode.data.picture,
    };

    console.log("userline data", userLineData);

    const generateUserId = () => {
      const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
      const timestamp = new Date().getTime();
      // Convert random number and timestamp to base 36
      const randomBase36 = randomNumber.toString(36);
      const timestampBase36 = timestamp.toString(36);
      // Concatenate the base36 representations
      const userId = `${randomBase36}${timestampBase36}`;
      return userId;
    };
    // Check if the user already exists in the database
    var user = await User.findOne({ line_user_id: decode.data.sub });

    if (user) {
      // Update the existing user data without changing the userId
      user = await User.findOneAndUpdate(
        { line_user_id: decode.data.sub },
        { $set: { ...userLineData } },
        { new: true }
      );

      // Set userId in the session
      req.session.userId = user.userId;
      console.log("UserId Session", req.session.userId);

      console.log("User updated");
      res.status(200).send("User updated");
    } else {
      // Generate a new userId for a new user
      const userId = generateUserId();

      // Create a new user document
      user = new User({ ...userLineData, userId });
      await user.save();

      // Set userId in the session
      req.session.userId = user.userId;
      console.log("UserId Session", req.session.userId);

      console.log("User saved");
      res.status(200).send("User saved");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.getUserData = async (req, res) => {
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
