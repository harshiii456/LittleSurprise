const Memory = require('../models/Memory');

// @desc    Get all memories
// @route   GET /api/memories
// @access  Private
const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find().sort({ date: 1 });
    res.json({
      success: true,
      count: memories.length,
      data: memories
    });
  } catch (error) {
    console.error('Get memories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create memory
// @route   POST /api/memories
// @access  Private
const createMemory = async (req, res) => {
  try {
    const memory = await Memory.create(req.body);
    res.status(201).json({
      success: true,
      data: memory
    });
  } catch (error) {
    console.error('Create memory error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getMemories,
  createMemory
};
