const {Pool} = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "renuc0pata",
  port: 5432,
  database: "DrunkDB"
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