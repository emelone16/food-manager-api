import express from "express";
import { setupDatabase } from "fbdb/index";

// Types
import { Backend } from "types/backend";

// Express
import bodyParserMiddleware from "./express/middleware/bodyParser";
import listen from "./express/start";

// Routes
import pantryRoutes from "routes/pantry";
import initializationRoutes from "routes/user/initialization";

// Backend Setup
const backend: Backend = {
  app: express(),
  port: Number(process.env.PORT) || 4000,
  db: setupDatabase()
};

// Middleware
bodyParserMiddleware(backend);

// Connect Routes
initializationRoutes(backend);
pantryRoutes(backend);

// Start listening
listen(backend);
