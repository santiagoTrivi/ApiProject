import { Router } from "express";
import MongoUserRepository from "../repositories/mongoUserRepository";
import PasswordCipher from "../lib/hasher";
import { UserUseCase } from "../../core/user/application/UserUseCase";
import UserControllers from "../constrollers/userControllers";



const mongoDbRepository = new MongoUserRepository();

const hasher = new PasswordCipher();

const userUseCase = new UserUseCase(mongoDbRepository, hasher);

const userControl = new UserControllers(userUseCase);

const router = Router();



router
.post('/signup', userControl.post);



export default router;