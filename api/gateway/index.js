const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", proxy("http://localhost:3000"));
app.use("/articles", proxy("http://localhost:3001"));
app.use("/roadmap", proxy("http://localhost:3002"));

app.listen(8000, () => {
  console.log("Gateway is listening on port 8000");
});
