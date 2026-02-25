const express = require('express');
const { getQuizQuestions, createQuizQuestion } = require('../controllers/quizController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/quiz
// @desc    Get all quiz questions
// @access  Private
router.get('/', auth, getQuizQuestions);

// @route   POST /api/quiz
// @desc    Create quiz question
// @access  Private
router.post('/', auth, createQuizQuestion);

module.exports = router;
