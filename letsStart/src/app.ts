import * as express from "express";
import catsRouter from "./cats/cats.route";
// const app: express.Application = express();
const app: express.Express = express();

/* Logging Middleware */
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is middleware");
  next();
});

// JSON Middleware
app.use(express.json());

app.use(catsRouter);

/* 404 Middleware */
app.use((req, res, next) => {
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
