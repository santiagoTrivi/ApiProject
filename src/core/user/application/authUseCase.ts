import { Hasher } from "core/common/hasherObjectInterface";
import UserObjectValue from "../domain/UserObjectValue";
import { UserRepository } from "../domain/userRepository";
import createHttpError from "http-errors";
import { EmailRepository } from "core/common/emailRepository";



export default class AuthUseCase{

    constructor(
        private readonly userRepository: UserRepository,
        private readonly hasher: Hasher,
        private readonly emailServer: EmailRepository
        
        ){}


    public async registerAndSendEmail(name: string, email: string, password: string, photoUrl?: string, provider?: string){
        
        const exist = await this.userRepository.exist(email);
        
        if(exist){
            throw new createHttpError.NotAcceptable('user already registered');
        }
        const hashedPassword = this.hasher.hashPasword(password);

        const data = new UserObjectValue(name, email, hashedPassword, photoUrl, provider);
        
        const newUser = await this.userRepository.createUser(data);



        if(!newUser){
            throw new createHttpError.RequestTimeout('unable to register user');
        };

        this.emailServer.content = `Dear ${data.name}, thanks for signing in.`
        this.emailServer.reciever = data.email;
        
        const resp = await this.emailServer.sendEmail();

        if(!resp){
            throw new createHttpError.ServiceUnavailable('email server unavailable');
        };

        return resp;
    }

    public async auth(email: string, password: string){

        const user = await this.userRepository.findOne(email);
        
        if(!user){
            throw new createHttpError.NotFound('the user is not reistered');
        };

        const response = await this.hasher.verifyPassword(password, user.password);

        if(!response){
            throw new createHttpError.Unauthorized('email and password incorrect');
        };

        return user;

    }
}