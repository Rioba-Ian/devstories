const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/utils/connection");
const colors = require("colors");
const cors = require("cors");

dotenv.config();

const app = express();

// middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// connection to the BD
connectDB();

app.listen(process.env.PORT, () => {
  console.log("App listening on port 3500");
});
