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
const sending_email_1 = require("../lib/sending_email");
const http_errors_1 = __importDefault(require("http-errors"));
class NotificationEmailServer {
    set content(text) {
        this._content = text;
    }
    set reciever(reciever) {
        this._reciever = reciever;
    }
    sendEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const compose = {
                from: 'santiagocarvajal103@gmail.com',
                to: this._reciever,
                subject: 'Sign up',
                text: this._content
            };
            yield sending_email_1.sender.sendMail(compose, (err, info) => {
                if (err) {
                    throw new http_errors_1.default.FailedDependency('email not sent');
                }
            });
            return true;
        });
    }
}
exports.default = NotificationEmailServer;
