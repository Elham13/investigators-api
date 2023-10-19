"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    caseType: {
        type: [String],
    },
    caseStatus: {
        type: String,
        enum: ["Accepted", "Rejected"],
        default: "Accepted",
    },
    alcoholAddiction: {
        type: [String],
    },
    tasksAssignedToQCReviewer: {
        type: [String],
    },
    preQcObservation: {
        type: String,
    },
    insuredPart: {
        type: String,
    },
    allocationType: {
        type: String,
    },
    documents: { type: {}, default: {} },
    investigator: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "ClaimInvestigator",
            default: null,
        },
    ],
    dashboardDataId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "DashboardData",
        default: null,
    },
    intimationDate: {
        type: Date,
        default: null,
    },
    rejectionReason: { type: [String] },
    rejectionReasonRemarks: {},
    assignedBy: {
        type: String,
        enum: ["Admin", "Pre QC", "Allocation"],
    },
}, { timestamps: true });
const ClaimCase = mongoose_1.default.models.ClaimCase || mongoose_1.default.model("ClaimCase", Schema);
exports.default = ClaimCase;
