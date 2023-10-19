import { Router } from "express";
import fniDataRoutes from "./fniData";

const allRoutes = Router();

allRoutes.use("/api", fniDataRoutes);

export default allRoutes;
