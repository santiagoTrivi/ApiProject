import { Hasher } from "core/common/hasherObjectInterface";
import UserObjectValue from "../domain/UserObjectValue";
import { UserRepository } from "../domain/userRepository";
import createHttpError from "http-errors";
import { EmailRepository } from "core/common/emailRepository";



export default class Authentication{

    constructor(
        private readonly userRepository: UserRepository,
        private readonly hasher: Hasher,
        private readonly emailServer: EmailRepository
        
        ){}


    public async registerAndSendEmail(name: string, email: string, password: string, photoUrl?: string, provider?: string){
        const hashedPassword = this.hasher.hashPasword(password);

        const data = new UserObjectValue(name, email, hashedPassword, photoUrl, provider);
        
        const newUser = this.userRepository.createUser(data);

        if(!newUser){
            throw new createHttpError.RequestTimeout('unable to register user');
        };

        this.emailServer.setEmailContent(`Dear ${data.name}, thanks for signing In. Email: ${data.email}`);

        const response = this.emailServer.sendEmail();

        if(!response){
            throw new createHttpError.ServiceUnavailable('email server unavailable');
        };

        return response;
    }
}