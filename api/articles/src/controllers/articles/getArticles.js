const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const getArticles = asyncHandler(async (req, res, next) => {
  try {
    let articles = await Article.find({});
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

module.exports = getArticles;
