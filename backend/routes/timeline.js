const express = require('express');
const { getTimelineEvents, createTimelineEvent } = require('../controllers/timelineController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/timeline
// @desc    Get all timeline events
// @access  Private
router.get('/', auth, getTimelineEvents);

// @route   POST /api/timeline
// @desc    Create timeline event
// @access  Private
router.post('/', auth, createTimelineEvent);

module.exports = router;
