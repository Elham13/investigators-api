"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFniData = void 0;
const dashboardData_1 = __importDefault(require("../../../Models/dashboardData"));
const getFniData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dashboardData_1.default.find({}).limit(10);
        const count = yield dashboardData_1.default.countDocuments();
        return res
            .status(200)
            .json({ success: true, message: "Fetched", data, count });
    }
    catch (error) {
        return res.status(500).json({ success: true, message: error.message });
    }
});
exports.getFniData = getFniData;
