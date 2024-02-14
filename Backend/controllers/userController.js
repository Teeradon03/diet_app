const { User } = require("../models/user");
const axios = require("axios");

const loginLine = async (req, res) => {
  try {
    const data = req.body;
    const extractedData = Object.keys(data).map((key) => key.split(":")[0]);
    const token = extractedData[0];
    const params = new URLSearchParams();
    params.append("id_token", token);
    params.append("client_id", process.env.CHANNELID);

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    /// send line information to LINE API TO VERIFY
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
      const time = Date.now();
      const updatedAt = new Date(time).toLocaleString();
      user = await User.findOneAndUpdate(
        { line_user_id: decode.data.sub },
        { $set: { ...userLineData, updatedAt } },
        { new: true }
      );
      req.session.userId = user.userId;
      let payload = {
        user: {
          userId: req.session.userId,
          role: user.role,
          name: user.line_username,
        },
      };
      res.json(payload);
    } else {
      // Create a new user document
      const userId = generateUserId();
      user = new User({ ...userLineData, userId });
      // console.log(user)
      await user.save();
      req.session.userId = user.userId;
      let payload = {
        user: {
          session: req.session.userId,
          role: user.role,
          name: user.line_username,
        },
      };
      res.json(payload);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateUserData = async (req, res) => {
  try {
    const data = req.body;
    const userId = await User.findOne({ userId: req.session.userId });

    if (userId.userId == req.session.userId) {
      const dateOfBirth = data.dateOfBirth;
      const updateUser = await User.findOneAndUpdate(
        { userId: req.session.userId },
        { $set: { ...data, dateOfBirth: dateOfBirth } },
        { new: true }
      );
    }
    res.json({
      data: data,
    });
  } catch (error) {
    console.log(" Error", error.message);
    res.json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  try {
    var userData = await User.find({});
    res.json(userData);
  } catch (error) {
    console.log("error", error);
    res.json({
      error: error.message,
    });
  }
};

const currentUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    if (userId) {
      const currentUser = await User.findOne({ userId });
      res.send(currentUser);
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const changeRole = async (req, res) => {
  try {
    let userId, role;
    Object.keys(req.body.role).forEach((key) => {
      const value = req.body.role[key];
      userId = key;
      role = value;
    });
    if ((userId, role)) {
      const user = await User.findOneAndUpdate(
        { userId },
        { role },
        { new: true }
      );
      res.send("Change role Successfully");
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  loginLine,
  getUserData,
  updateUserData,
  currentUser,
  changeRole,
};
