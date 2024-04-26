const {Pool} = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "renuc0pata",
  port: 5432,
  database: "DrunkDB"
});

module.exports = pool;