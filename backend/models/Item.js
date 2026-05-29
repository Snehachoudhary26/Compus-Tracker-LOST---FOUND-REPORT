const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  type:        { type: String, enum: ['lost','found'], required: true },
  userType:    String,
  userName:    String,
  email:       String,
  name:        { type: String, required: true },
  category:    String,
  description: String,
  location:    String,
  date:        String,
  imageUrl:    String,
  status:      { type: String, default: 'pending' },
  flagged:     { type: Boolean, default: false },
  qrCode:      { type: String },
  qrCode:      { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Item', schema);
