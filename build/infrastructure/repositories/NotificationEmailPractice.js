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
class NotificationEmailPractice {
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
            console.log(compose);
            return true;
        });
    }
}
exports.default = NotificationEmailPractice;
