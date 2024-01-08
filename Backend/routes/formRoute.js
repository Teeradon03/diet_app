const express = require("express");
const router = express.Router();
const authSession = require('../middleware/auth');
/// controller
const {
  getQuestions,
  getQuestionById,
  createQuestionnaires,
  createQuestion,
  getQuestionnaire,
  getQuestionnaireByUserId,
} = require("../controllers/formController");

router.use(authSession)

/// question
router.get("/get-questions", getQuestions);
router.get("/get-question/:id", getQuestionById);
router.post("/create-question", createQuestion);

/// questionnaires
router.get("/get-questionnaires", getQuestionnaire);
router.get("/get-questionnaire/:userId", getQuestionnaireByUserId);
router.post("/create-questionnaires", createQuestionnaires);

module.exports = router;
