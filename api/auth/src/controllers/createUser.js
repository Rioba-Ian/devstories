const hash = require("../utils/hashPassword");
const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (request, response, next) => {
  const { first_name, last_name, email, password } = request.body;
  let hashedPassword = await hash(password);
  // create table
  const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;
  await pool.query(query);
  // insert into table
  pool
    .query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email, created_at, updated_at",
      [first_name, last_name, email, hashedPassword]
    )
    .then((result) => {
      const user = result.rows[0];
      response.status(201).json(user);
    })
    .catch((err) => {
      // Handle the error
      next(err); // Pass the error to the next middleware for centralized error handling
    });
});

module.exports = createUser;
