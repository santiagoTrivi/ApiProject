import nodemailer from  'nodemailer';

export const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'santiagocarvajal103@gmail.com',
        pass: 'zkikzzqeosfryhkz'
    }
});