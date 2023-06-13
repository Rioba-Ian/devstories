const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/connection");
const colors = require("colors")

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// connection to the BD
connectDB();

app.listen(process.env.PORT, () => {
  console.log("App listening on port 3500");
});
