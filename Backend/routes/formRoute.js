const express = require("express");
const router = express.Router();
/// controller
const {
  getQuestions,
  getQuestionById,
  createQuestionnaires,
  createQuestion,
  getQuestionnaire,
  getQuestionnaireByUserId,
} = require("../controllers/formController");

/// question
router.get("/get-questions", getQuestions);
router.get("/get-question/:id", getQuestionById);
router.post("/create-question", createQuestion);

/// questionnaires
router.get("/get-questionnaires", getQuestionnaire);
router.get("/get-questionnaire/:userId", getQuestionnaireByUserId);
router.post("/create-questionnaires", createQuestionnaires);

module.exports = router;
