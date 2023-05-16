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
exports.UserUseCase = void 0;
const UserObjectValue_1 = __importDefault(require("../domain/UserObjectValue"));
class UserUseCase {
    constructor(userRepository, hasher) {
        this.userRepository = userRepository;
        this.hasher = hasher;
    }
    postUserAndSendEmail(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = this.hasher.hashPasword(password);
            const user = new UserObjectValue_1.default(name, email, hash);
            const userPosted = yield this.userRepository.registerUser(user);
            const newUser = {
                uuid: userPosted.uuid,
                name: userPosted.name,
                email: userPosted.email,
                status: userPosted.status
            };
            return newUser;
        });
    }
    findUser({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.userRepository.findOne({ email });
            return user;
        });
    }
}
exports.UserUseCase = UserUseCase;
