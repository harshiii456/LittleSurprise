const QuizQuestion = require('../models/QuizQuestion');

// @desc    Get all quiz questions
// @route   GET /api/quiz
// @access  Private
const getQuizQuestions = async (req, res) => {
  try {
    const questions = await QuizQuestion.find();
    res.json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (error) {
    console.error('Get quiz questions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create quiz question
// @route   POST /api/quiz
// @access  Private
const createQuizQuestion = async (req, res) => {
  try {
    const question = await QuizQuestion.create(req.body);
    res.status(201).json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Create quiz question error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getQuizQuestions,
  createQuizQuestion
};
