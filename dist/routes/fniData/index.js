"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_1 = require("./controllers/get");
const post_1 = require("./controllers/post");
const fniDataRoutes = (0, express_1.Router)();
fniDataRoutes.route("/fniData").get(get_1.getFniData).post(post_1.updateFniData);
exports.default = fniDataRoutes;
