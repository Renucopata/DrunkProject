const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/products", async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM products";
    db.query(selectQuery, (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json(result.rows);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const selectQuery = "SELECT * FROM products WHERE id = $1";
    db.query(selectQuery, [id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(result.rows[0]);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/companies", async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM companies";
    db.query(selectQuery, (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json(result.rows);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/companies/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const selectQuery = "SELECT * FROM companies WHERE id = $1";
    db.query(selectQuery, [id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Company not found" });
      }
      res.json(result.rows[0]);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;