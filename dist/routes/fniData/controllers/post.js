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
exports.updateFniData = void 0;
const fs_1 = __importDefault(require("fs"));
const dashboard_1 = require("../../../dashboard");
const updateFniData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const data = await DashboardData.find({});
        const data1 = dashboard_1.data.map((obj) => {
            var _a;
            const tempObj = Object.assign(Object.assign({}, obj), { contractDetails: obj.contractDetaials, claimDetails: Object.assign(Object.assign({}, obj.claimDetails), { deductibleAmount: obj.claimDetails.deductableAmmount }), hospitalDetails: Object.assign(Object.assign({}, obj.hospitalDetails), { pinCode: obj.hospitalDetails.pincode }), historicalClaim: (_a = obj === null || obj === void 0 ? void 0 : obj.historicalClaim) === null || _a === void 0 ? void 0 : _a.map((obj1) => {
                    var _a;
                    return Object.assign(Object.assign({}, obj1), { history: (_a = obj1 === null || obj1 === void 0 ? void 0 : obj1.history) === null || _a === void 0 ? void 0 : _a.map((el) => {
                            const tempEl = Object.assign(Object.assign({}, el), { claimAmount: el.claimAmmount });
                            tempEl === null || tempEl === void 0 ? true : delete tempEl.claimAmmount;
                            return tempEl;
                        }) });
                }) });
            delete tempObj["contractDetaials"];
            delete tempObj.claimDetails.deductableAmmount;
            delete tempObj.hospitalDetails.pincode;
            return tempObj;
        });
        const filePath = "data.json";
        const jsonData = JSON.stringify(data1, null, 2);
        fs_1.default.writeFile(filePath, jsonData, "utf8", (err) => {
            if (err) {
                console.error("Error writing JSON file:", err);
            }
            else {
                console.log("JSON file has been written successfully.");
            }
        });
        return res.status(200).json({ success: true, message: "Hello" });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});
exports.updateFniData = updateFniData;
