const express = require("express");
const uploadImage = require("../controllers/images/uploadImage");
const multer = require("multer");

const router = express.Router();

router.post("/:id/upload", uploadImage);

module.exports = router;
