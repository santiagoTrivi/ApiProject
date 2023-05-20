
export interface EmailRepository{

    setEmailContent(text: string): void;
    sendEmail(): Promise<boolean>;

};