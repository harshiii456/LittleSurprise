const Letter = require('../models/Letter');

// @desc    Get all letters
// @route   GET /api/letters
// @access  Private
const getLetters = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const letters = await Letter.find(filter).sort({ order: 1 });
    res.json({
      success: true,
      count: letters.length,
      data: letters
    });
  } catch (error) {
    console.error('Get letters error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create letter
// @route   POST /api/letters
// @access  Private
const createLetter = async (req, res) => {
  try {
    const letter = await Letter.create(req.body);
    res.status(201).json({
      success: true,
      data: letter
    });
  } catch (error) {
    console.error('Create letter error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getLetters,
  createLetter
};
