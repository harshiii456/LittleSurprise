const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  whatIWasThinking: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    enum: ['milestone', 'memory', 'special'],
    default: 'memory'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Memory', memorySchema);
