import { UserEntity } from "../../core/user/domain/UserEntityInterface";
import { UserRepository } from "../../core/user/domain/userRepository";
import { UserModel } from "../models/userModel";


export default class MongoUserRepository implements UserRepository{

    async findUserById(uuid: string): Promise<any> {
        const search = await UserModel.findById(uuid);
        return search;
    }
    async registerUser(userData: UserEntity): Promise<any> {
        const user = await UserModel.create(userData);
        return user;
    }
    async findOne({email}: {email: string}): Promise<any> {
        const search = await UserModel.findOne({email});
        return search
    }

    
}