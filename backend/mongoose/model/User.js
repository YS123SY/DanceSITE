const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  pseudo: {
    type: String
  },
  age: {
    type: Number
  },
  sexe: {
    type: String
  },
  ville: {
    type: String
  },
  category: [],
  image: {
    type: String
  },
  annonce: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

const User = mongoose.model("Users", UserSchema);

module.exports = { User };
