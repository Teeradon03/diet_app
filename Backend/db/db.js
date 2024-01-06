const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAST);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
