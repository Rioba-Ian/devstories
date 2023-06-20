const multer = require("multer");

// Configure multer for file upload
const upload = multer({ storage: multer.memoryStorage() });

module.exports = upload;
