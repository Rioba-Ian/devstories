const express = require("express");
const uploadImage = require("../controllers/images/uploadImage");
const upload = require("../utils/multer");

const router = express.Router();

router.put("/:id/upload", upload.single("file"), uploadImage);

module.exports = router;
