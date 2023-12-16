const express = require('express');
const router = express.Router();
/// controller
const { getQuestions, getQuestionById, createQuestionnaires, create_question, getQuestionnaire, getQuestionnaireByUserId} = require('../controllers/formController')

/// question 
router.get('/get-questions-list',getQuestions )
router.get('/get-question/:id', getQuestionById)
router.post('/create_question', create_question )

/// questionnaires
router.get('/get-questionnaires', getQuestionnaire)
router.get('/get-questionnaire/:userId', getQuestionnaireByUserId)
router.post('/create-questionnaires', createQuestionnaires )


module.exports = router