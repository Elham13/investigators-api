"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    investigatorName: {
        type: String,
        required: [true, "investigatorName is required"],
    },
    Type: {
        type: String,
        enum: ["Internal", "External"],
        required: [true, "Type is required"],
    },
    Mode: {
        type: String,
    },
    assignmentPreferred: {
        type: String,
    },
    Location: {
        type: String,
    },
    City: {
        type: String,
    },
    State: {
        type: String,
    },
    pinCode: {
        type: String,
    },
    dailyThreshold: {
        type: Number,
        required: [true, "dailyThreshold is required"],
    },
    monthlyThreshold: {
        type: Number,
        required: [true, "monthlyThreshold is required"],
    },
    dailyAssign: {
        type: Number,
        default: 0,
    },
    monthlyAssined: {
        type: Number,
        default: 0,
    },
    userStatus: {
        type: String,
        enum: ["active", "inactive"],
        required: [true, "userStatus is required"],
    },
    inactiveReason: {
        type: String,
    },
    inactiveFrom: {
        type: Date,
    },
    inactiveTo: {
        type: Date,
    },
    activefrom: {
        type: Date,
    },
    hitRate: {
        type: Number,
        default: 0,
    },
    TAT: {
        type: Number,
        default: 0,
    },
    performer: {
        type: Number,
        default: 0,
    },
    updatedDate: {
        type: Date,
        default: new Date(),
    },
}, { timestamps: true });
const ClaimInvestigator = mongoose_1.default.models.ClaimInvestigator ||
    mongoose_1.default.model("ClaimInvestigator", Schema);
exports.default = ClaimInvestigator;
