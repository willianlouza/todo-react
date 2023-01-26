import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import router from "./app/routes/route";

export default class App {
  server: Application;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
  }
  routes() {
    this.server.use(router);
  }
}
