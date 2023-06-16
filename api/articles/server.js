const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const articleRoutes = require("./src/routes/article");
const connectDB = require("./src/utils/connection");
const colors = require("colors");
const errorHandler = require("./src/utils/errorHandler");

dotenv.config();

const app = express();

// connect to the db
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(articleRoutes);

// errorHandler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
