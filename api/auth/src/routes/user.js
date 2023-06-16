const express = require("express");
const createUser = require("../controllers/createUser");
const getUsers = require("../controllers/getUsers");
const deleteUser = require("../controllers/deleteUser");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);
router.delete("/:id", deleteUser);

module.exports = router;
