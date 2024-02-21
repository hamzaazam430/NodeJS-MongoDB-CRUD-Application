const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  email: String,
  blogs: [{
    type: Schema.Types.ObjectId,
    ref: "Blog"
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Author", authorSchema);
