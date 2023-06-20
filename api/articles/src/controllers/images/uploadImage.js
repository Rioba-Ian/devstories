const asyncHandler = require("express-async-handler");
const Article = require("../../models/Article");

// firebase
const admin = require("firebase-admin");
const serviceAccount = require("../../utils/serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://articles-project-abec3.appspot.com",
});

const uploadImage = asyncHandler(async (req, res, next) => {
  try {
    const { originalname, buffer } = req.file;
    const articleId = req.params.id;

    const article = await Article.findById(articleId);

    const bucket = admin.storage().bucket();
    const file = bucket.file(originalname);

    await file.save(buffer, {
      contentType: "image/jpeg",
    });

    const imageUrl = await file.getSignedUrl({
      action: "read",
      expires: "03-09-2030",
    });

    // update the article
    article.images.push(imageUrl);
    await article.save();

    res.json({ imageUrl });
  } catch (error) {
    next(error);
  }
});

module.exports = uploadImage;
