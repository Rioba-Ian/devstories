const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:process.env.CONNECTION_STRING
});

module.exports = pool;
