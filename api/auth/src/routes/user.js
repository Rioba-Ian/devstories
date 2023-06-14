const express = require("express");
const createUser = require("../controllers/createUser");
const getUsers = require("../controllers/getUsers");

const router = express.Router();

router.route("/users").post(createUser).get(getUsers);

module.exports = router;
