const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const skill = req.query.skill;
  let query = `
    SELECT p.* FROM projects p
    LEFT JOIN project_skills ps ON p.id = ps.project_id
  `;
  if (skill) query += ` WHERE ps.skill = ?`;

  db.all(query, skill ? [skill] : [], (err, rows) => {
    res.json(rows);
  });
});

module.exports = router;