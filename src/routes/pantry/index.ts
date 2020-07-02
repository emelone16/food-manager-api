import { Backend } from "../../types/backend";
import deletePantryHandler from "./delete";
import getPantryHandler from "./get";
import putPantryHandler from "./put";

const pantryRoutes = ({ app, db }: Backend) => {
  app.get("/user/:uuid/pantry", getPantryHandler(db));
  app.put("/user/:uuid/pantry", putPantryHandler(db));
  app.delete("/user/:uuid/pantry", deletePantryHandler(db));
};

export default pantryRoutes;
