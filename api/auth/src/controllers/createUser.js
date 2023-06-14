const pool = require("../utils/query");

const createUser = (request, response) => {
  const { first_name, last_name, email, password } = request.body;

  pool.query(
    "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [first_name, last_name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json(results.rows[0]);
    }
  );
};

module.exports = createUser;
