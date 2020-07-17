const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    "first-name": {
      type: String,
      require: true,
    },
    "middle-name": {
      type: String,
    },
    "last-name": {
      type: String,
      require: true,
    },
  },
  "email-id": {
    primary: {
      type: String,
      require: true,
      min: 6,
      max: 255,
    },
    secondary: {
      type: String,
      min: 6,
      max: 255,
    },
  },
  password: {
    type: String,
    require: true,
    min: 10,
    max: 1024,
  },
  "contact-no": {
    primary: {
      type: String,
      require: true,
    },
    secondary: {
      type: String,
    },
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    "pin-code": {
      type: Number,
    },
  },
  avatar: {
    url: {
      type: String,
    },
    "thumbnail-url": {
      type: String,
    },
  },
  "auth-token": {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user-infos", userSchema);
