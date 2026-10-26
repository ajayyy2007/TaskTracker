<<<<<<< HEAD
# DevOps Starter App — Task Tracker

A small Node.js + Express application for practising the full DevOps workflow.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Endpoints

- `GET /` — web UI
- `GET /health` — health check
- `GET /api/tasks` — list tasks
- `POST /api/tasks` — add a task (`{"title":"Learn CloudFormation"}`)
- `PATCH /api/tasks/:id` — update completion (`{"done":true}`)
- `DELETE /api/tasks/:id` — delete a task

## Notes

Tasks are held in memory, so they reset when the server restarts. This is intentional for the initial DevOps exercise; persistence can be added later.

## Our planned learning path

1. Run and test the app locally.
2. Write a Dockerfile and run the container.
3. Push the code to GitHub.
4. Add CI with GitHub Actions.
5. Provision AWS networking with CloudFormation.
6. Create a deployment target and registry.
7. Automate deployment and verify health checks.
=======
# TaskTracker
simple website primarily built to practice the complete devops workflow upto deploying
>>>>>>> 55515a9090c8ef494f48f7edb0c262dfd1bcb956
