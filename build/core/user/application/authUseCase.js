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
const UserObjectValue_1 = __importDefault(require("../domain/UserObjectValue"));
const http_errors_1 = __importDefault(require("http-errors"));
class AuthUseCase {
    constructor(userRepository, hasher, emailServer) {
        this.userRepository = userRepository;
        this.hasher = hasher;
        this.emailServer = emailServer;
    }
    registerAndSendEmail(name, email, password, photoUrl, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.userRepository.exist(email);
            if (exist) {
                throw new http_errors_1.default.NotAcceptable('user already registered');
            }
            const hashedPassword = this.hasher.hashPasword(password);
            const data = new UserObjectValue_1.default(name, email, hashedPassword, photoUrl, provider);
            const newUser = yield this.userRepository.createUser(data);
            if (!newUser) {
                throw new http_errors_1.default.RequestTimeout('unable to register user');
            }
            ;
            this.emailServer.content = `Dear ${data.name}, thanks for signing in.`;
            this.emailServer.reciever = data.email;
            const resp = yield this.emailServer.sendEmail();
            if (!resp) {
                throw new http_errors_1.default.ServiceUnavailable('email server unavailable');
            }
            ;
            return resp;
        });
    }
}
exports.default = AuthUseCase;
