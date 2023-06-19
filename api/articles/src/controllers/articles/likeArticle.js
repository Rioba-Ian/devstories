const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const likeArticle = asyncHandler(async (req, res, next) => {
  const articleId = req.params.id;
  const { userId } = req.body;

  try {
    let article = await Article.findById(articleId);

    if (!article) {
      throw new Error("Article not found");
    }

    if (article.likedBy.includes(userId)) {
      throw new Error("User has already liked the article");
    }

    // Add the user to the likedBy array
    article.likedBy.push(userId);

    article.meta.votes += 1;
    await article.save();

    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});

module.exports = likeArticle;
