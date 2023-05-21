import AuthUseCase from "core/user/application/authUseCase";
import { NextFunction, Request, Response } from "express";
import { AuthInputData } from "infrastructure/objectValueSchema/authSchema";
import { UserInputData } from "infrastructure/objectValueSchema/userSchema";





export default class AuthController{

    constructor(private readonly authUseCase: AuthUseCase){}

    public postUser = async(req: Request<{}, {}, UserInputData>, res: Response, next: NextFunction) => {
        const {password, passwordConfimation,  ...user} = req.body;

        try {
            const processResponse = await this.authUseCase.registerAndSendEmail(user.name, user.email, password);
            
            if(processResponse){
                return res.status(200).json({
                    message: "user registered",
                    user
                })
            }
        } catch (error) {
            next(error);
        }
    };

    public login = async(req: Request<{}, {}, AuthInputData>, res: Response, next: NextFunction) => {
        const {email, password} = req.body;

        try {
            const user = await this.authUseCase.auth(email, password);
            // token

            return res.status(200).json({
                message: 'successful signin',
                user
            });
        } catch (error) {
            next(error);
        }
    };

}