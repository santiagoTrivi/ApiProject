import { Hasher } from "../../common/hasherObjectInterface";
import { UserView } from "../domain/UserEntityInterface";
import UserObjectValue from "../domain/UserObjectValue";
import { UserRepository } from "../domain/userRepository";



export class UserUseCase{
    
    constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher){}

    public async postUserAndSendEmail(name: string, email: string, password: string){
        const hash = this.hasher.hashPasword(password);
        const user = new UserObjectValue(name, email, hash);
        const userPosted = await this.userRepository.registerUser(user);

        const newUser: UserView ={
            uuid: userPosted.uuid,
            name: userPosted.name,
            email: userPosted.email,
            status: userPosted.status
        }
        return newUser;
    }

    public async findUser({email}: {email: string}){
        const user = this.userRepository.findOne({email});
        return user
    }
}