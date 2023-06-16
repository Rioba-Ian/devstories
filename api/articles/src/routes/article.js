const express = require("express");
const { createArticle } = require("../controllers/createArticle");
const getArticles = require("../controllers/getArticles");

const router = express.Router();

router.get("/", getArticles);
router.post("/create", createArticle);

module.exports = router;
