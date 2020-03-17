const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required
  },
  age: {
    type: Number,
    required
  }
});

module.exports = Author = mongoose.model("Author", AuthorSchema);
