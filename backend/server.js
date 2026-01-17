const express = require("express");
const cors = require("cors");

const profile = require("./routers/profile");
const projects = require("./routers/project");
const search = require("./routers/search");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/profile", profile);
app.use("/projects", projects);
app.use("/search", search);

app.listen(3000, () => console.log("API running on port 3000"));