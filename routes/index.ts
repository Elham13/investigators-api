import { Router } from "express";
import fniDataRoutes from "./fniData";
import uploadRoutes from "./uploadFile";

const allRoutes = Router();

allRoutes.use(fniDataRoutes);
allRoutes.use(uploadRoutes);

export default allRoutes;
