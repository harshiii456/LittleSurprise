const express = require('express');
const { getMemories, createMemory } = require('../controllers/memoriesController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/memories
// @desc    Get all memories
// @access  Private
router.get('/', auth, getMemories);

// @route   POST /api/memories
// @desc    Create memory
// @access  Private
router.post('/', auth, createMemory);

module.exports = router;
