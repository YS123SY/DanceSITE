const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  event: {
    type: String
  },
  lieu: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  }
});

const Event = mongoose.model("Events", UserSchema);

module.exports = { Event };
