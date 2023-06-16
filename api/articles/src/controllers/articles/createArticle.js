const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

// rabbit service
const { startConsuming } = require("../../services/recieveMessage");

let author;
function handleMessage(user) {
  author = user;
  return user;
}

const createArticle = asyncHandler(async (req, res, next) => {
  const { title, body, hidden, comments, meta } = req.body;

  startConsuming("user-service-queue", handleMessage);

  try {
    const article = new Article({
      title,
      author,
      body,
      hidden,
      comments,
      meta,
    });
    const new_article = await article.save();
    res.status(201).json(new_article);
  } catch (error) {
    next(error);
  }
});

module.exports = { createArticle };
