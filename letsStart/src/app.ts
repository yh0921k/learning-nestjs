import * as express from "express";
import { Cat } from "./app.model";

// const app: express.Application = express();
const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log("server is on...");
});
