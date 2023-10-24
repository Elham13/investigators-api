"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("./controllers/post");
const multer_1 = __importDefault(require("../../config/multer"));
const uploadRoutes = (0, express_1.Router)();
uploadRoutes.route("/uploadFile").post(multer_1.default.single("file"), post_1.uploadFile);
exports.default = uploadRoutes;
