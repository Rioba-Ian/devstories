const express = require("express");
const createComment = require("../controllers/comments/createComment");

const router = express.Router();

router.post("/comment/:id", createComment);


module.exports = router;