const express = require('express');
const { getMissYouMessages, getRandomMessage, createMissYouMessage } = require('../controllers/missYouController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/miss-you
// @desc    Get all miss you messages
// @access  Private
router.get('/', auth, getMissYouMessages);

// @route   GET /api/miss-you/random
// @desc    Get random miss you message
// @access  Private
router.get('/random', auth, getRandomMessage);

// @route   POST /api/miss-you
// @desc    Create miss you message
// @access  Private
router.post('/', auth, createMissYouMessage);

module.exports = router;
