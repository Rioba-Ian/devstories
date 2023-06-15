const pool = require("../utils/query");

const asyncHandler = require("express-async-handler");
const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await pool.query("DELETE FROM users WHERE id = $1", [
      userId,
    ]);
    res.status(204).json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = deleteUser;
