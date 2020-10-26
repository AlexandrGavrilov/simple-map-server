const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  markers: {
    type: Array,
    required: false,
    default: [],
  }
})

module.exports = mongoose.model('User', userSchema);
