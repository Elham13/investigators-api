import { Router } from "express";
import { uploadFile } from "./controllers/post";
import upload from "../../config/multer";

const uploadRoutes = Router();

uploadRoutes.route("/uploadFile").post(upload.single("file"), uploadFile);

export default uploadRoutes;
