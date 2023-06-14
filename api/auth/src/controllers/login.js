const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../middlewares/generateToken");
const pool = require("../utils/query");

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Fetch user from the database based on the username
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);
    const user = result.rows[0];

    // generate token
    const token = await generateToken(user.id);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Check if passwords match
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Passwords match, login successful
    res.json({ ...user, access_token: token });
  } catch (error) {
    next(error);
  }
});

module.exports = login;
