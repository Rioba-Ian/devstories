const Pool = require("pg").Pool;
const pool = new Pool({
  user: "devstories",
  host: "localhost",
  database: "devstories",
  password: "devstories",
  port: 5432,
});

module.exports = pool;
