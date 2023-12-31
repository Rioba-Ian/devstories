const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/utils/connection");
const colors = require("colors");
const cors = require("cors");
const userRoutes = require("./src/routes/user");
const errorHandler = require("./src/utils/errorHandler");
const loginRoutes = require("./src/routes/auth");
const { requestLogger, errorLogger } = require("./src/utils/logger");

dotenv.config();
const app = express();
app.use(express.json());
app.use(requestLogger);

// requests
app.use(userRoutes);
app.use(loginRoutes);

// connection to the BD
connectDB();

// middlewares
app.use(errorHandler);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
// app.use(errorLogger);

app.listen(process.env.PORT, () => {
  console.log("App listening on port 3000");
});
