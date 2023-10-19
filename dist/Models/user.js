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
const mongoose_1 = __importDefault(require("mongoose"));
const autoIncrementId_1 = __importDefault(require("./autoIncrementId"));
const Schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    userId: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    role: {
        type: String,
        enum: {
            values: ["Allocation", "Admin", "Pre QC"],
            message: "Please provide one of the following values:=> Allocation, Admin",
        },
        required: [true, "role is required"],
    },
    status: {
        type: String,
        enum: {
            values: ["Active", "Inactive"],
            message: "Please provide one of the following values:=> Active, Inactive",
        },
        required: [true, "status is required"],
    },
    config: {
        leadView: {
            type: [String],
        },
        canAllocate: { type: Boolean, default: false },
        geography: { type: [String], default: [] },
    },
    team: [String],
}, { timestamps: true });
Schema.pre("save", function (next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.userId) {
            const autoIncId = yield autoIncrementId_1.default.findOneAndUpdate({ collectionName: "users" }, { $inc: { value: 1 } });
            this.userId = `P${(_b = (_a = autoIncId.value) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.padStart(5, "0")}`;
        }
        next();
    });
});
const User = mongoose_1.default.models.User || mongoose_1.default.model("User", Schema);
exports.default = User;
