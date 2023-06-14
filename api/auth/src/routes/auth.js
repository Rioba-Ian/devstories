const express = require("express");
const login = require("../controllers/login");

const router = express.Router();

router.route("/users/login").post(login);

module.exports = router;
