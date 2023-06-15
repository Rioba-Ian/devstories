const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
