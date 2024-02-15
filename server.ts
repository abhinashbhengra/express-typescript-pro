import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running of port ${PORT}`);
  })
  .on("error", (err: any) => {
    if (err.conde === "EADDRINUSE") {
      console.log("Error: addresss already in use.");
    } else {
      console.log(err);
    }
  });
