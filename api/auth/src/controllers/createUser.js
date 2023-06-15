const hash = require("../utils/hashPassword");
const pool = require("../utils/query");
const asyncHandler = require("express-async-handler");

const messageServices = require("../services/messageService");

const createUser = asyncHandler(async (request, response, next) => {
  const { first_name, last_name, email, password } = request.body;
  let hashedPassword = await hash(password);

  pool
    .query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email, created_at, updated_at",
      [first_name, last_name, email, hashedPassword]
    )
    .then((result) => {
      const user = result.rows[0];
      response.status(201).json(user);
      messageServices.sendMessage("user-service-queue", user, next);
    })
    .catch((err) => {
      // Handle the error
      next(err); // Pass the error to the next middleware for centralized error handling
    });
});

module.exports = createUser;
