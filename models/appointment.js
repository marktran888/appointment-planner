const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  customer: { type: mongoose.Schema.ObjectId, ref: 'User' }
  // business: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // confirmed: { type: Boolean}
});

module.exports = mongoose.model('Appointment', schema);
