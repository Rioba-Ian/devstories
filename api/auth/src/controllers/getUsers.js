const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (request, response, next) => {
  pool.query(
    "SELECT id, first_name, last_name, email, created_at, updated_at FROM users ORDER BY id ASC",
    (error, results) => {
      if (error) {
        next(error);
      }
      let users = results.rows;
      response.status(200).json(users);
    }
  );
});

module.exports = getUsers;
