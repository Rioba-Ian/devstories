const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:
    "postgres://devstory_group:kZLLtAx1kW9DqcDggZTS32gqeYhwc2kW@dpg-ci81citiuie0h35ciu4g-a.oregon-postgres.render.com/devstories?ssl=true",
});

module.exports = pool;
