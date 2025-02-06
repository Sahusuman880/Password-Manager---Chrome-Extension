const mongoose = require("mongoose");
const passwordSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Passwords", passwordSchema);
