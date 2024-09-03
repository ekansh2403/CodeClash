const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  player1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  player2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  problem: { type: String, required: true },
  timeLimit: { type: Number, required: true },
  player1Solution: { type: String },
  player2Solution: { type: String },
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Match', MatchSchema);
