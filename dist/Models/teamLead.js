"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    phoneNo: {
        type: String,
        required: [true, "phone number is required"],
    },
    password: {
        type: String,
    },
}, { timestamps: true });
const TeamLead = mongoose_1.default.models.TeamLead || mongoose_1.default.model("TeamLead", Schema);
exports.default = TeamLead;
