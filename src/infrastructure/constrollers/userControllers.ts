import { NextFunction, Request, Response } from "express";
import { UserUseCase } from "../../core/user/application/UserUseCase";
import MainError from 'http-errors';



export default class UserControllers{

    constructor(private userCase: UserUseCase){};

    public post = async(req: Request, res: Response, next: NextFunction) => {
        const {name, email, password} = req.body;
        
        try {
            let user = await this.userCase.findUser({email});
            
            if(!user){
                user = await this.userCase.postUserAndSendEmail(name, email, password)
                return res.status(200).json({
                    message: 'user registered',
                    user
                })
            }

            throw new MainError.Forbidden('user already registered')

        } catch (error) {
            next(error)
        }

        
    }
    
}