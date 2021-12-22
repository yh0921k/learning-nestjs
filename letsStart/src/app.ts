import * as express from "express";
import catsRouter from "./cats/cats.route";

// const app: express.Application = express();

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    /* Logging Middleware */
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("This is middleware");
      next();
    });

    // JSON Middleware
    this.app.use(express.json());

    this.setRoute();

    /* 404 Middleware */
    this.app.use((req, res) => {
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
