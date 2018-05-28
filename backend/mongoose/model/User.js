const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pseudo: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sexe: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  category: [],
  image: {
    type: String
  },
  annonce: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("Users", UserSchema);

module.exports = { User };
