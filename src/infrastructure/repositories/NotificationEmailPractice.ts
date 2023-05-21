import { EmailRepository } from "core/common/emailRepository";




export default class NotificationEmailPractice implements EmailRepository{
    
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
        console.log(compose);

        
        return true;
    }

}