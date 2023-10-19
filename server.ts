import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import allRoutes from "./routes";
import connectDb from "./config/db";
const app: Express = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(allRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
