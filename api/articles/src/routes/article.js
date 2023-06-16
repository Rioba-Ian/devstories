const express = require("express");
const { createArticle } = require("../controllers/articles/createArticle");
const getArticles = require("../controllers/articles/getArticles");
const updateArticle = require("../controllers/articles/updateArticle");
const deleteArticle = require("../controllers/articles/deleteArticle");

const router = express.Router();

router.get("/", getArticles);
router.post("/create", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
