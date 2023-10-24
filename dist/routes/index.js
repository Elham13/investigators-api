"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fniData_1 = __importDefault(require("./fniData"));
const uploadFile_1 = __importDefault(require("./uploadFile"));
const allRoutes = (0, express_1.Router)();
allRoutes.use(fniData_1.default);
allRoutes.use(uploadFile_1.default);
exports.default = allRoutes;
