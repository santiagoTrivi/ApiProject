"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoUserRepository_1 = __importDefault(require("../repositories/mongoUserRepository"));
const hasher_1 = __importDefault(require("../lib/hasher"));
const UserUseCase_1 = require("../../core/user/application/UserUseCase");
const userControllers_1 = __importDefault(require("../constrollers/userControllers"));
const userInputValidation_1 = require("../middlewares/userInputValidation");
const userSchema_1 = require("../objectValueSchema/userSchema");
const mongoDbRepository = new mongoUserRepository_1.default();
const hasher = new hasher_1.default();
const userUseCase = new UserUseCase_1.UserUseCase(mongoDbRepository, hasher);
const userControl = new userControllers_1.default(userUseCase);
const router = (0, express_1.Router)();
router
    .post('/signup', (0, userInputValidation_1.userInputValidation)(userSchema_1.UserInputSchema), userControl.post);
exports.default = router;
