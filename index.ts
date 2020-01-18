import express, { Request, Response } from "express"
import { setupDatabase } from "./src/firebase"

// Types
import initializationRoutes from "./src/routes/user/initialization"
import { Backend } from "./src/types"

// Initialize API and Database
const backend: Backend = {
  app: express(),
  db: setupDatabase()
}

initializationRoutes(backend)

backend.app.listen(4000, () => {
  console.log("Food Manager API started on port 4000")
})
