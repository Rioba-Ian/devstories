const express = require("express");
const createUser = require("../controllers/createUser");
const getUsers = require("../controllers/getUsers");
const deleteUser = require("../controllers/deleteUser");

const router = express.Router();

router.route("/users").post(createUser).get(getUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;
