import * as express from "express";

// const app: express.Application = express();
const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  // res.send("Hello Express");
  // res.send({ hello: "Hello Express!" });
  res.send({ name: "yhk", age: 30, friends: ["aaa", "bbb"] });
});

app.post("/", (req: express.Request, res: express.Response) => {
  res.send({ post: "post" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
