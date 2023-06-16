const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const createComment = asyncHandler(async (req, res, next) => {
  const articleId = req.params.id;
  const { body } = req.body;
  try {
    let date = new Date();
    let article = await Article.findById(articleId);

    article.comments.push({ body, date });

    let articleWithComment = await article.save();
    res.status(201).json(articleWithComment);
  } catch (error) {
    next(error);
  }
});

module.exports = createComment;
