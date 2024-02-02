/// import data 
const { question } = require("./question");
// สร้างฟังก์ชันสำหรับเพิ่มข้อมูล
const mongoose = require("mongoose");
const { Question } = require("./models/form");
//// connect to URL
mongoose.connect("mongodb://0.0.0.0:27017/nanoet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const generateData = async () => {
  try {

    const questionAlreadyExists = await Question.findOne({question: question.content})
    // console.log('me laewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',questionAlreadyExists)
    if (questionAlreadyExists){
        console.log('me laewwww')
        const updateQuestion = await Question.findOneAndUpdate(
          { question: question.content },
          { $set: { question } },
          { new: true }
          )
    }
    else{ 
        const question_data = await Question.insertMany(question);
    console.log("sdasdasdasd", question_data);
    }
  
  } catch (error) {
    console.log("error", error);
  }
};

generateData();
