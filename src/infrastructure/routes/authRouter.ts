import PasswordCipher from "../lib/hasher";
import NotificationEmailPractice from "../repositories/NotificationEmailPractice";
import MongoUserRepository from "../repositories/mongoUserRepository";
import AuthUseCase from "../../core/user/application/authUseCase";
import { Router } from "express";
import AuthController from "../constrollers/authContrllers";
import { userInputValidation } from "../middlewares/userInputValidation";
import { UserInputSchema } from "../objectValueSchema/userSchema";
import { AuthInputSchema } from "../objectValueSchema/authSchema";




const mongoDB = new MongoUserRepository();

const hasher = new PasswordCipher();

const emailserver = new NotificationEmailPractice();

const authenticationprocess = new AuthUseCase(mongoDB, hasher, emailserver);

const authControllers = new AuthController(authenticationprocess);
const router = Router();

router
.post('/signup',userInputValidation(UserInputSchema), authControllers.postUser)

.post('/signin',userInputValidation(AuthInputSchema), authControllers.login)




export default router;