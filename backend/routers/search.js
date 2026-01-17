const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const q = `%${req.query.q}%`;
  db.all(
    `SELECT * FROM projects WHERE title LIKE ? OR description LIKE ?`,
    [q, q],
    (err, rows) => res.json(rows)
  );
});

router.get("/skills/top", (req, res) => {
  db.all(
    `SELECT name, COUNT(*) as count FROM skills GROUP BY name`,
    (err, rows) => res.json(rows)
  );
});

module.exports = router;