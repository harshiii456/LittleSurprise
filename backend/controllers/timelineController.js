const TimelineEvent = require('../models/TimelineEvent');

// @desc    Get all timeline events
// @route   GET /api/timeline
// @access  Private
const getTimelineEvents = async (req, res) => {
  try {
    const events = await TimelineEvent.find().sort({ order: 1 });
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    console.error('Get timeline events error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create timeline event
// @route   POST /api/timeline
// @access  Private
const createTimelineEvent = async (req, res) => {
  try {
    const event = await TimelineEvent.create(req.body);
    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Create timeline event error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getTimelineEvents,
  createTimelineEvent
};
