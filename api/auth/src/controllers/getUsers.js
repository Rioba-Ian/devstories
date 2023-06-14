const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      next(error);
    }
    let users = results.rows;
    // Remove password field from each user object
    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    response.status(200).json(usersWithoutPassword);
  });
});

module.exports = getUsers;
