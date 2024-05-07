const {Pool} = require("pg");

const pool = new Pool({
  host: "dpg-colne1ol5elc73bl7ipg-a.oregon-postgres.render.com",
  user: "admin",
  password: "kbMA6w6VfDLWSl7wguXXjxN6MH4XliUF",
  port: 5432,
  database: "drunkdb",
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  connect: () => {
    pool.connect((err) => {
      if (err) {
        console.error('Error connecting to database', err);
      } else {
        console.log('Connected to database');
      }
    });
  },
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};