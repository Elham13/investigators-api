import { Router } from "express";
import { getFniData } from "./controllers/get";
import { updateFniData } from "./controllers/post";

const fniDataRoutes = Router();

fniDataRoutes.route("/fniData").get(getFniData).post(updateFniData);

export default fniDataRoutes;
