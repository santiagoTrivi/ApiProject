"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hasher_1 = __importDefault(require("../lib/hasher"));
const NotificationEmailPractice_1 = __importDefault(require("../repositories/NotificationEmailPractice"));
const mongoUserRepository_1 = __importDefault(require("@/repositories/mongoUserRepository"));
const authUseCase_1 = __importDefault(require("../../core/user/application/authUseCase"));
const express_1 = require("express");
const authContrllers_1 = __importDefault(require("../constrollers/authContrllers"));
const mongoDB = new mongoUserRepository_1.default();
const hasher = new hasher_1.default();
const emailserver = new NotificationEmailPractice_1.default();
const authenticationprocess = new authUseCase_1.default(mongoDB, hasher, emailserver);
const authControllers = new authContrllers_1.default(authenticationprocess);
const router = (0, express_1.Router)();
router
    .post('/signup', authControllers.postUser);
exports.default = router;
