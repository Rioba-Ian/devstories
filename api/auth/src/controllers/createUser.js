const hash = require("../utils/hashPassword");
const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (request, response, next) => {
    
  const { first_name, last_name, email, password } = request.body;
  let hashedPassword = await hash(password);
  console.log(hashedPassword);

  pool
    .query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, email, hashedPassword]
    )
    .then((result) => {
      // Process the query result
      response.status(201).json(result.rows[0]);
    })
    .catch((err) => {
      // Handle the error
      next(err); // Pass the error to the next middleware for centralized error handling
    });
});

module.exports = createUser;
