const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  db.get("SELECT * FROM profile WHERE id=1", (err, row) => {
    res.json(row);
  });
});

router.put("/", (req, res) => {
  const { name, email, education, work } = req.body;
  db.run(
    `UPDATE profile SET name=?, email=?, education=?, work=? WHERE id=1`,
    [name, email, education, work],
    () => res.json({ success: true })
  );
});

module.exports = router;