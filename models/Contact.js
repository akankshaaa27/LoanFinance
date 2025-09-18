const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  contact: { type: String, required: true },
  message: { type: String },
  loans: [{ type: String, required: true }],
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
