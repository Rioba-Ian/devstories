const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      next(error)
    }
    response.status(200).json(results.rows);
  });
});

module.exports = getUsers;
