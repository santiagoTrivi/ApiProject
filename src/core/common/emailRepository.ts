
export interface EmailRepository{

    content: string;
    reciever: string;
    sendEmail(): Promise<boolean>;

};