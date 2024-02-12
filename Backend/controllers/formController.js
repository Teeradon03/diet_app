/// model
const { Question, Questionnaire } = require("../models/form");
const { User } = require("../models/user");
/// controller

////////// Question
exports.getQuestions = async (req, res) => {
  try {
    const listForm = await Question.find({}).exec();
    // console.log("Get data successfully");
    res.json(listForm);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

exports.getQuestionById = async (req, res) => {
  const { id } = req.params; // Assuming the ID is passed as a route parameter

  try {
    // Check if ID is a number but in string format
    if (!/^\d+$/.test(id)) {
      res.json({
        message: "ID must be a number in string format",
      });
      return;
    }
    // Find the question by ID
    const foundQuestion = await Question.findOne({ id }).exec();

    if (foundQuestion) {
      res.json(foundQuestion);
    } else {
      res.json({
        message: "Question not found",
      });
    }
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      error: error.message,
    });
  }
};
exports.createQuestion = async (req, res) => {
  // console.log("req.session.userId in questionnnnn", req.session.userId);
  const data = req.body;
  //   console.log("the data from create question", data);
  //   console.log('data contenttttttttttt',data.content)
  //   console.log('data idddddddddddd',data.id)
  idExists = await Question.findOne({ id: data.id });
  contentExists = await Question.findOne({ content: data.content });
  // console.log("id", idExists);
  try {
    /// check id must be number
    if (!/^\d+$/.test(data.id)) {
      res.json({
        message: "ID must be a number in string format",
      });
      return;
    }
    /// check id and question already exists
    if (idExists && contentExists) {
      res.json({
        message: "This Id And Question already exist",
      });

      /// check id already exists
    } else if (idExists) {
      res.json({
        message: "This Id already exist",
      });
      /// check content or question already exists
    } else if (contentExists) {
      res.json({
        message: "This Question already exist",
      });
      /// check id and question still not in the database, add it to the database
    } else {
      const createQuestion = await new Question(data).save();
      res.status(200).json({
        data: createQuestion,
      });
    }
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      error: error.message,
    });
  }
};

/// Questionnnaires
exports.createQuestionnaires = async (req, res) => {
  const data = req.body;

  try {
    const questionIdAlreadyExists = await Questionnaire.findOne({
      questionId: data.questionId, userId: req.session.userId
    });
    const dateTime = new Date();
    if (questionIdAlreadyExists === null ) {
      const newQuestionnaires = new Questionnaire({
        ...data,
        dateTime: dateTime,
        userId: req.session.userId,
      });
      await newQuestionnaires.save();
      res.json(newQuestionnaires);
    } else if (
      questionIdAlreadyExists.userId == req.session.userId &&
      questionIdAlreadyExists.questionId == data.questionId
    ) {
      const updateQuestionnaires = await Questionnaire.findOneAndUpdate(
        { questionId: data.questionId, userId: req.session.userId },
        { $set: { ...data} },
        { new: true }
      );
      console.log('updated', updateQuestionnaires)
      res.send('updated')
    } else {
      console.log("This questionId already exists");
      res.json({
        message: "This Questionnaire already exist",
      });
    }
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getQuestionnaire = async (req, res) => {
  try {
    const getQuestionnaire = await Questionnaire.find({});
    res.json(getQuestionnaire);
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getQuestionnaireByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    // Check if ID is a number but in string format
    if (!/^\d+$/.test(userId)) {
      res.json({
        message: "ID must be a number in string format",
      });
      return;
    }
    if (!userId) {
      res.status(400).json({
        error: "User ID is missing in the request.",
      });
      return;
    }

    const getQuestionnaire = await Questionnaire.find({ userId });

    if (getQuestionnaire.length > 0) {

      res.json(getQuestionnaire);
    } else {
      console.log("No Questionnaire found for user ID:", userId);
      res.json({
        message: "No Questionnaire found for the specified user ID.",
      });
    }
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      error: error.message,
    });
  }
};
