const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");
const deleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  try {
    const query = "DELETE FROM users WHERE id = $1";
    const values = [userId];

    await pool.query(query, values);

    res.status(204).send("User deleted successfully");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUser;
