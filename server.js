const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let nextId = 3;
let tasks = [
  { id: 1, title: "Learn Docker basics", done: true },
  { id: 2, title: "Deploy an app with AWS", done: false }
];

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", app: "devops-starter-app" });
});

app.get("/api/tasks", (_req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const title = typeof req.body.title === "string" ? req.body.title.trim() : "";
  if (!title) {
    return res.status(400).json({ error: "Task title is required." });
  }

  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  return res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  task.done = Boolean(req.body.done);
  return res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const existingLength = tasks.length;
  tasks = tasks.filter((item) => item.id !== id);

  if (tasks.length === existingLength) {
    return res.status(404).json({ error: "Task not found." });
  }

  return res.status(204).end();
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`DevOps Starter App listening on port ${PORT}`);
});
