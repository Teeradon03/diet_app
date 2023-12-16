const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({
  id: { type: String, required: true, },
  content: { type: String, required: true },
});
const Question = mongoose.model("Question", questionSchema);

const questionnaireSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  userId: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  answer : { type: [Number] , required: true },
});
const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema);

module.exports = {
  Question,
  Questionnaire,
};

