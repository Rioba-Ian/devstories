const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "devstories",
  password: "password123",
  port: 5432,
});

module.exports = pool;
