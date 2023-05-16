"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class PasswordCipher {
    hashPasword(password) {
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(password, salt);
        return hash;
    }
    verifyPassword(inputPassword, hashpassword) {
        return bcryptjs_1.default.compare(inputPassword, hashpassword);
    }
}
exports.default = PasswordCipher;
