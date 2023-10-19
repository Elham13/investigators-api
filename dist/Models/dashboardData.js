"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MemberSchema = new mongoose_1.default.Schema({
    membershipNumber: { type: Number },
    membershipName: { type: String },
    DOB: { type: Date },
    relation: { type: String },
});
const HistorySchema = new mongoose_1.default.Schema({
    hospital: { type: String },
    diagnosis: { type: String },
    DOA: { type: Date },
    DOD: { type: Date },
    claimAmount: { type: String },
});
const ClaimHistorySchema = new mongoose_1.default.Schema({
    memberName: { type: String },
    claimPreAuthNo: { type: String },
    memberNo: { type: String },
    history: [HistorySchema],
});
const InvestigatorSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ClaimInvestigator",
        default: null,
    },
    name: {
        type: String,
    },
    assignedFor: {
        type: String,
        enum: ["Hospital", "Insured", ""],
        default: "",
    },
});
const Schema = new mongoose_1.default.Schema({
    claimId: {
        type: Number,
        required: [true, "ClaimId is required"],
        unique: true,
    },
    claimType: { type: String, required: [true, "Claim Type is required"] },
    claimSubType: { type: String, default: "" },
    contractDetails: {
        contractNo: { type: String },
        product: { type: String },
        policyStartDate: { type: Date },
        port: { type: String },
        prevInsuranceCompany: { type: String },
        insuredSince: { type: String },
        NBHIPolicyStartDate: { type: String },
        membersCovered: { type: Number },
        agentName: { type: String },
        currentStatus: { type: String },
        agentCode: { type: String },
        branchLocation: { type: String },
        sourcing: { type: String },
        bancaDetails: { type: String },
    },
    members: [MemberSchema],
    insuredDetails: {
        insuredName: { type: String },
        gender: { type: String },
        age: { type: Number },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        contactNo: { type: String },
        emailId: { type: String },
        memberType: { type: String },
        memberId: { type: String },
        pivotalCustomerId: { type: String },
        height: { type: String },
        weight: { type: String },
        occupation: { type: String },
        memberFraudStatus: { type: String },
    },
    claimDetails: {
        claimStatus: { type: String },
        noOfClaimsInHistory: { type: Number },
        claimNo: { type: String },
        submittedAt: { type: Date },
        receivedAt: { type: Date },
        payTo: { type: String },
        memberNo: { type: String },
        pivotalCustomerId: { type: String },
        claimType: { type: String },
        mainClaim: { type: String },
        hospitalizationType: { type: String },
        deductibleAmount: { type: String },
        diagnosis: { type: String },
        diagnosisCode1: { type: String },
        diagnosisCode2: { type: String },
        diagnosisCode3: { type: String },
        icdCode: { type: String },
        lineOfTreatment: { type: String },
        billedAmount: { type: String },
        preAuthNo: { type: String },
    },
    hospitalDetails: {
        providerNo: { type: String },
        providerName: { type: String },
        providerType: { type: String },
        providerAddress: { type: String },
        providerState: { type: String },
        providerCity: { type: String },
        pinCode: { type: String },
    },
    hospitalizationDetails: {
        treatingDoctorName: { type: String },
        treatingDoctorRegNo: { type: String },
        dateOfAdmission: { type: Date },
        dateOfDischarge: { type: Date },
        LOS: { type: String },
    },
    historicalClaim: [ClaimHistorySchema],
    allocationType: {
        type: String,
        enum: ["Single", "Dual", ""],
        default: "",
    },
    stage: {
        type: String,
        default: "Pending for Allocation",
    },
    intimationDate: {
        type: Date,
        default: Date.now(),
    },
    isReInvestigated: {
        type: Boolean,
        default: false,
    },
    investigationCount: {
        type: Number,
        default: 0,
    },
    claimTrigger: {
        type: String,
    },
    investigationId: {
        type: String,
        default: "",
    },
    teamLead: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "TeamLead",
        default: null,
    },
    caseId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ClaimCase",
        default: null,
    },
    // Date of assignment last date of allocation to be shown
    dateOfOS: {
        type: Date,
        default: null,
    },
    dateOfClosure: {
        type: Date,
        default: null,
    },
    clusterManager: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ClusterManager",
        default: null,
    },
    claimInvestigators: [InvestigatorSchema],
    closureTAT: {
        type: Number,
        default: 0,
    },
    lossType: {
        type: String,
        default: "",
    },
    lossDate: {
        type: Date,
        default: null,
    },
    sumInsured: {
        type: String,
        default: "",
    },
    rejected: {
        rejectionReason: { type: [String] },
        rejectionReasonRemarks: {},
    },
}, { timestamps: true });
const DashboardData = mongoose_1.default.models.DashboardData || mongoose_1.default.model("DashboardData", Schema);
exports.default = DashboardData;
