const express = require("express");
const router = express.Router();

const db = require('../db');

/*router.post("/get", async (req, res) => {
    const { username, first_name, last_name, password_hash } = req.body;
  
    try {
      const selectQuery = 'SELECT * FROM users WHERE username = $1';
      db.query(selectQuery, [username], (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
        if (result.rows.length > 0) {
          return res.status(401).json("User already exists!");
        }
  
        const insertQuery = 'INSERT INTO users (username, first_name, last_name, password_hash) VALUES ($1, $2, $3, $4)';
        db.query(insertQuery, [username, first_name, last_name, password_hash], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Internal server error' });
          }
          return res.send("User added to the database");
        });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });*/