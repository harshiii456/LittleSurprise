const mongoose = require('mongoose');

const missYouMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['miss', 'love', 'funny', 'romantic'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MissYouMessage', missYouMessageSchema);
