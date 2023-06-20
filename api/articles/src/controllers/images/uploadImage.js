const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");
const AWS = require("aws-sdk");
const { promisify } = require("util");

// Configure AWS credentials
AWS.config.update({
  accessKeyId: "AKIASAJIN3RXBSRNKWM6",
  secretAccessKey: "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",
  region: "us-east-1",
});

// Create an S3 instance
const s3 = new AWS.S3();

const uploadImage = asyncHandler(async (req, res, next) => {
  const articleId = req.params.id;
  const file = req.file;

  // Set the S3 upload parameters
  const params = {
    Bucket: "dev-story-node",
    Key: file.originalname,
    Body: file.buffer,
  };

  try {
    // Promisify the s3.upload function
    const s3Upload = promisify(s3.upload.bind(s3));

    // Upload the file to S3
    const data = await s3Upload(params);
    const url = data.Location;

    console.log("File uploaded successfully4:", url);

    if (url) {
      // Save to the database
      const article = await Article.findById(articleId);
      article.images.push(url);
      await article.save();

      res.status(200).json({ message: "File uploaded successfully", url });
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

module.exports = uploadImage;
