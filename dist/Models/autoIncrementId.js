"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    collectionName: {
        type: String,
        required: [true, "collectionName is required"],
    },
    value: {
        type: Number,
        required: [true, "value is required"],
        default: 0,
    },
}, { timestamps: true });
const AutoIncrementId = mongoose_1.default.models.AutoIncrementId || mongoose_1.default.model("AutoIncrementId", Schema);
exports.default = AutoIncrementId;
