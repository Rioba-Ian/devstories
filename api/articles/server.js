const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const articleRoutes = require("./src/routes/article");
const connectDB = require("./src/utils/connection");
const colors = require("colors");
const errorHandler = require("./src/utils/errorHandler");
const commentRoutes = require("./src/routes/comments");
const uploadRoutes = require("./src/routes/upload");
var bodyParser = require("body-parser");

dotenv.config();
const app = express();

// connect to the db
connectDB();

// middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// routes
app.use(articleRoutes);
app.use(commentRoutes);
app.use(uploadRoutes);

// errorHandler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
