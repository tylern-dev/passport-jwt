const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,

  },
  lastName: {
    type: String,

  },
  email: {
    type: String,
    required: true,
    unique: true

  },
  phone: {
    type: Number
  },
  shippingAddress: {
    streetAddress: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin','customer'],
    default: 'customer',
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;