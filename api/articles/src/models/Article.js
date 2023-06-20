const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: String,
    author: { type: {}, required: true },
    body: String,
    comments: [{ body: String, date: { type: Date, default: Date.now } }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number,
    },
    images: [],
    likedBy: [],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
// ready to go!
