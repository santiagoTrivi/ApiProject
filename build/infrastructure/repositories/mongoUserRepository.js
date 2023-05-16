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
const userModel_1 = require("../models/userModel");
class MongoUserRepository {
    findUserById(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield userModel_1.UserModel.findById(uuid);
            return search;
        });
    }
    registerUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.UserModel.create(userData);
            return user;
        });
    }
    findOne({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield userModel_1.UserModel.findOne({ email });
            return search;
        });
    }
}
exports.default = MongoUserRepository;
