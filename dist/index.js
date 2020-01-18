"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebase_1 = require("./src/firebase");
// Types
const initialization_1 = __importDefault(require("./src/routes/user/initialization"));
// Initialize API and Database
const backend = {
    app: express_1.default(),
    db: firebase_1.setupDatabase()
};
initialization_1.default(backend);
backend.app.listen(4000, () => {
    console.log("Food Manager API started on port 4000");
});
//# sourceMappingURL=index.js.map