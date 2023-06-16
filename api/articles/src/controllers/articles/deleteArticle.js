const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const deleteArticle = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  try {
    let deletedArticle = await Article.findByIdAndDelete(id);
    res.status(200).json(deletedArticle);
  } catch (error) {
    next(error)
  }
});


module.exports = deleteArticle;
