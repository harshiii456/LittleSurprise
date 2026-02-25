const mongoose = require('mongoose');

const timelineEventSchema = new mongoose.Schema({
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
  icon: {
    type: String,
    default: '❤️'
  },
  order: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TimelineEvent', timelineEventSchema);
