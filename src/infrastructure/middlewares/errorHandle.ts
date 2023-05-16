import { NextFunction, Request, Response } from "express";
import MainError, {HttpError} from 'http-errors';

export const errorHanddler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof HttpError){
        return res.status(err.statusCode).json({
            errorMessage: err.message
        })
    }
    console.log(err)
    res.status(500).json({
        errorMessage: 'internal error server'
    })
}