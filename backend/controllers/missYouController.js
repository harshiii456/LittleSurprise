const MissYouMessage = require('../models/MissYouMessage');

// @desc    Get all miss you messages
// @route   GET /api/miss-you
// @access  Private
const getMissYouMessages = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const messages = await MissYouMessage.find(filter);
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Get miss you messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get random miss you message
// @route   GET /api/miss-you/random
// @access  Private
const getRandomMessage = async (req, res) => {
  try {
    const messages = await MissYouMessage.find();
    if (messages.length === 0) {
      return res.status(404).json({ message: 'No messages found' });
    }
    const randomIndex = Math.floor(Math.random() * messages.length);
    res.json({
      success: true,
      data: messages[randomIndex]
    });
  } catch (error) {
    console.error('Get random message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create miss you message
// @route   POST /api/miss-you
// @access  Private
const createMissYouMessage = async (req, res) => {
  try {
    const message = await MissYouMessage.create(req.body);
    res.status(201).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Create miss you message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getMissYouMessages,
  getRandomMessage,
  createMissYouMessage
};
