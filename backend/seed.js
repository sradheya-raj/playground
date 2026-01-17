const db = require("./db");
const fs = require("fs");

const schema = fs.readFileSync("./schema.sql", "utf8");

db.serialize(() => {
  db.exec(schema, (err) => {
    if (err) throw err;
    console.log("Schema created");
  });

  db.run(
    `INSERT INTO profile 
     (id, name, email, education, work, github, linkedin, portfolio)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      1,
      "Sradheyaraj Ray",
      "sradheyarajray@gmail.com",
      "Masters of Computer Applications",
      "Backend Developer",
      "https://github.com/sradheya-ray",
      "https://www.linkedin.com/in/sradheya-ray/",
    ],
    (err) => {
      if (err) throw err;
    }
  );

  const skills = ["Node.js", "Python", "SQL", "REST"];
  skills.forEach((skill) => {
    db.run(
      `INSERT INTO skills (name) VALUES (?)`,
      [skill],
      (err) => {
        if (err) throw err;
      }
    );
  });

  db.run(
    `INSERT INTO projects (title, description, link)
     VALUES (?, ?, ?)`,
    [
      "Me-API Playground",
      "Personal API project",
      "https://github.com/you/me-api"
    ],
    function (err) {
      if (err) throw err;

      db.run(
        `INSERT INTO project_skills (project_id, skill)
         VALUES (?, ?)`,
        [this.lastID, "Node.js"],
        (err) => {
          if (err) throw err;
        }
      );
    }
  );

  console.log("Database seeded successfully");
});

process.on("exit", () => db.close());