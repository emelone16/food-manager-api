"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initializationRoutes = ({ app, db }) => {
    app.get("/", (req, res) => {
        const docRef = db.collection("users").doc("alovelace");
        const setAda = docRef.set({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        res.send("HELLO WORLD");
    });
};
exports.default = initializationRoutes;
//# sourceMappingURL=initialization.js.map