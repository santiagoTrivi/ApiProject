import { sender } from "../lib/sending_email";
import { EmailRepository } from "core/common/emailRepository";
import createHttpError from "http-errors";
import senderEmailserver from 'nodemailer';


export default class NotificationEmailServer implements EmailRepository{
    
    private _content: string;
    private _reciever: string;
    
    set content(text: string){
        this._content = text
    }

    set reciever(reciever: string){
        this._reciever = reciever;
    }
    
    
    async sendEmail(): Promise<boolean> {
        const compose = {
            from: 'santiagocarvajal103@gmail.com',
            to: this._reciever,
            subject: 'Sign up',
            text: this._content
        }

        await sender.sendMail(compose, (err, info) => {
            
            if(err){
                throw new createHttpError.FailedDependency('email not sent');
            }
        });

        return true;

    }
}

