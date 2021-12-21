import * as express from "express";
import { Cat } from "./app.model";

// const app: express.Application = express();
const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is middleware");
  next();
});

app.get(
  "/cats/som",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("This is som middleware");
    next();
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get(
  "/cats/blue",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ blue: Cat[0] });
  }
);

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ son: Cat[1] });
});

app.use((req, res, next) => {
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
