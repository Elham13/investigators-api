"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    totalRecords: {
        type: Number,
    },
    insertedRecords: {
        type: Number,
    },
    skippedRecords: {
        type: Number,
    },
    skippedClaimIds: {
        type: [String],
    },
    skippedReasons: {
        type: [String],
    },
}, { timestamps: true });
const DashboardFeedingLog = mongoose_1.default.models.DashboardFeedingLog ||
    mongoose_1.default.model("DashboardFeedingLog", Schema);
exports.default = DashboardFeedingLog;
