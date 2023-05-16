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
const http_errors_1 = __importDefault(require("http-errors"));
class UserControllers {
    constructor(userCase) {
        this.userCase = userCase;
        this.post = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                let user = yield this.userCase.findUser({ email });
                if (!user) {
                    user = yield this.userCase.postUserAndSendEmail(name, email, password);
                    return res.status(200).json({
                        message: 'user registered',
                        user
                    });
                }
                throw new http_errors_1.default.Forbidden('user already registered');
            }
            catch (error) {
                next(error);
            }
        });
    }
    ;
}
exports.default = UserControllers;
