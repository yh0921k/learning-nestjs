import * as express from "express";
import { Cat } from "./app.model";

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

// READ 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("DB Connect Error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
});

// READ 특정 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("DB Connect Error");
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
});

// CREATE 새로운 데이터 추가
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);

    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
});

/* 404 Middleware */
app.use((req, res, next) => {
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
