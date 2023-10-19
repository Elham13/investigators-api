"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    providerNumber: {
        type: String,
    },
    providerName: {
        type: String,
    },
    providerType: {
        type: String,
    },
    providerAddress: {
        type: String,
    },
    providerCity: {
        type: String,
    },
    providerState: {
        type: String,
    },
    pinCode: {
        type: String,
    },
    fraudList: {
        type: Boolean,
        default: false,
    },
    coutionList: {
        type: Boolean,
        default: false,
    },
    preferPartnerList: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const HospitalProvider = mongoose_1.default.models.HospitalProviderList ||
    mongoose_1.default.model("HospitalProviderList", Schema);
exports.default = HospitalProvider;
