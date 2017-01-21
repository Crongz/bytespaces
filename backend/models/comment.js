// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var CommentSchema   = new mongoose.Schema({
  username: String,
  url: String,
  content: String,
  date: { type: Date, default: Date.now },
  location: { x: Number, y: Number},
  points: [String],
});

// Export the Mongoose model
module.exports = mongoose.model('Comment', CommentSchema);