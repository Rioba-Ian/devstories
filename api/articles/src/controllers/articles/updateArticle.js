const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

const updateArticle = asyncHandler(async (req, res, next) => {
  const { title, body } = req.body;
  const id = req.params.id;

  try {
    const updated = await Article.findById(id);

    if (!updated) {
      return res
        .status(401)
        .json({ error: `The article with id ${id} is not found` });
    }

    let updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );

    res.status(201).json(updatedArticle);
  } catch (error) {
    next(error);
  }
});

module.exports = updateArticle;
