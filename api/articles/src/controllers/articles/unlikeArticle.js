const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const unlikeArticle = asyncHandler(async (req, res, next) => {
  const articleId = req.params.id;
  const { userId } = req.body;

  try {
    const article = await Article.findById(articleId);

    if (!article) {
      throw new Error("Article not found");
    }

    if (!article.likedBy.includes(userId)) {
      throw new Error("User haven't liked the article");
    }

    article.likedBy = article.likedBy.filter((id) => id !== userId);
    article.meta.votes -= 1;

    await article.save();
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});

module.exports = unlikeArticle;
