/// model
const { Question, Questionnaire } = require("../models/form");

/// controller

////////// Question
exports.getQuestions = async (req, res) => {
    try {
        const listForm = await Question.find({}).exec();
        console.log("Get data successfully");
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
exports.create_question = async (req, res) => {
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
    console.log(data);
    try {
        const createForm = await new Questionnaire(data).save();
        console.log("Created Questoinnaires Successfully");
        res.json(createForm);
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
        console.log("Here's your this Questionnaire", getQuestionnaire);
        res.json(getQuestionnaire);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            error: error.message,
        });
    }
};
