const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const getArticle = asyncHandler(async (req, res, next) => {
  const articleId = req.params.id;
  try {
    const article = await Article.findById(articleId);

    if (!article) {
      throw new Error("Article not found");
    }
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});

module.exports = getArticle;
