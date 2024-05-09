// convocatoriasApis.js

const express = require("express");
const router = express.Router();
const db = require("../db");

// Create API
router.post("/addConvocatoria", async (req, res) => {
  const { requerimiento, fecha_apertura, fecha_cierre, estado, owner,categoria } = req.body;
  //const owner = localStorage.getItem("usertype");

  try {
    const insertQuery = 'INSERT INTO convocatorias (requerimiento, fecha_apertura, fecha_cierre, estado, owner, categoria) VALUES ($1, $2, $3, $4, $5, $6)';
    await db.query(insertQuery, [requerimiento, fecha_apertura, fecha_cierre, estado, owner, categoria]);
    res.status(201).json({ message: "Convocatoria created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read API
router.get("/getConvocatorias", async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM convocatorias";
    const result = await db.query(selectQuery);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read by ID API
router.get("/convocatorias/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const selectQuery = "SELECT * FROM convocatorias WHERE id = $1";
    const result = await db.query(selectQuery, [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Convocatoria not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update API
router.put("/updateConvocatoria/:id", async (req, res) => {
  const id = req.params.id;
  const { requerimiento, fecha_apertura, fecha_cierre, estado, owner, categoria } = req.body;

  try {
    const updateQuery = 'UPDATE convocatorias SET requerimiento = $1, fecha_apertura = $2, fecha_cierre = $3, estado = $4, owner = $5, categoria = $6 WHERE id = $7';
    await db.query(updateQuery, [requerimiento, fecha_apertura, fecha_cierre, estado, owner, categoria, id]);
    res.status(201).json({ message: "Convocatoria updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete API
router.delete("/deleteConvocatoria/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteQuery = "DELETE FROM convocatorias WHERE id = $1";
    await db.query(deleteQuery, [id]);
    res.status(201).json({ message: "Convocatoria deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/category-companies/:category", async (req, res) => {
  const category = req.params.category;

  try {
    // Retrieve all companies that sell products in the specified category
    const selectQuery = `SELECT * FROM companies WHERE id IN (
      SELECT company_id FROM products WHERE category = $1
    )`;
    const result = await db.query(selectQuery, [category]);

    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;