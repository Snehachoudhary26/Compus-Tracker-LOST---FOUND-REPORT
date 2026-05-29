const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  userId:   { type: String, required: true },
  type:     { type: String, enum: ['match','message','found','lost','system'], default: 'system' },
  title:    { type: String, required: true },
  message:  { type: String, required: true },
  itemId:   { type: String },
  read:     { type: Boolean, default: false },
  icon:     { type: String, default: '🔔' }
}, { timestamps: true });
module.exports = mongoose.model('Notification', schema);
