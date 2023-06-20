const express = require("express");
const { createArticle } = require("../controllers/articles/createArticle");
const getArticles = require("../controllers/articles/getArticles");
const updateArticle = require("../controllers/articles/updateArticle");
const deleteArticle = require("../controllers/articles/deleteArticle");
const likeArticle = require("../controllers/articles/likeArticle");
const unlikeArticle = require("../controllers/articles/unlikeArticle");
const getArticle = require("../controllers/articles/getArticle");

const router = express.Router();

router.get("/", getArticles);
router.post("/create", createArticle);
router.put("/:id", updateArticle);
router.get("/:id", getArticle);
router.delete("/:id", deleteArticle);
router.post("/:id/like", likeArticle);
router.post("/:id/unlike", unlikeArticle);

module.exports = router;
