const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  senderId:     String,
  senderName:   String,
  receiverId:   String,
  receiverName: String,
  content:      { type: String, required: true },
  read:         { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Message', schema);
