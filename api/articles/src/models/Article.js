const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: String,
    author: {},
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
// ready to go!
