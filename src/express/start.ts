import fs from "fs";
import https from "https";
import { Backend } from "types/backend";

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/erikjmelone.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/erikjmelone.com/fullchain.pem")
};

const listen = ({ app, port }: Backend) => {
  app.listen(port, (err: Error) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Started food-api-manager on " + port);
    }
  });
};

export const listenProd = ({ app, port }: Backend) => {
  https
    .createServer(options, app)
    .listen(port, () =>
      console.log(`Example app listening at https://localhost:${port}`)
    );
};

export default listen;
