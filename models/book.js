const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required
  },
  genre: {
    type: String,
    required
  },
  authorId: {
    type: String,
    required
  }
});

module.exports = Book = mongoose.model("Book", BookSchema);
