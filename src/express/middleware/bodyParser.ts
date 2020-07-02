import * as bodyParser from "body-parser";
import { Backend } from "../../types/backend";

const bodyParserMiddleware = ({ app }: Backend) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export default bodyParserMiddleware;
