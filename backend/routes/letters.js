const express = require('express');
const { getLetters, createLetter } = require('../controllers/lettersController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/letters
// @desc    Get all letters
// @access  Private
router.get('/', auth, getLetters);

// @route   POST /api/letters
// @desc    Create letter
// @access  Private
router.post('/', auth, createLetter);

module.exports = router;
