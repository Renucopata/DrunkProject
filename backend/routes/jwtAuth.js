const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require('../db');

//const jwtGenerator = require("../utils/jwtGenerator");
//const authorize = require("../middleware/authorize");

//authorizeentication

router.post("/register", async (req, res) => {
  const { username, first_name, last_name,  password_hash } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE username = $1';
    db.query(query, [username], (err, result) => {
        
   if (result.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }
    });

   // const salt =  bcrypt.genSalt(10);
    //const bcryptPassword =  bcrypt.hash(password_hash, salt);
    const insertQuery = 'INSERT INTO users (username, first_name, last_name, password_hash) VALUES ($1, $2, $3, $4)';
    db.query(insertQuery, [username, first_name, last_name,  password_hash], (err, result) => {
      /*if(result.rows.length > 0){
        return res.status(200).json("Register was succesful")
      }*/
      return res.json(result)
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/*router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
        username
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
*/
module.exports = router;