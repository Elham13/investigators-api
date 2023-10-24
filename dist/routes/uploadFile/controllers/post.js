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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file)
            throw new Error("File upload failed");
        return res
            .status(200)
            .json({ success: true, message: "Good", data: req.file.path });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});
exports.uploadFile = uploadFile;
