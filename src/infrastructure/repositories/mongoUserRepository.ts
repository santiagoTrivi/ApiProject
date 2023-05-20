import { UserModel } from "@/models/userModel";
import { UserEntity } from "core/user/domain/UserEntityInterface";
import { UserRepository } from "core/user/domain/userRepository";



export default class MongoUserRepository implements UserRepository{
    async createUser(data: UserEntity): Promise<any> {
        const user = await UserModel.create(data);
        return user;
    }
    findById(input_uuid: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async exist(input_email: string): Promise<boolean> {
        const search = await UserModel.exists({email: input_email});
        return search ? true : false;
    }
    findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    UpdateUser(): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(uuid: string): void {
        throw new Error("Method not implemented.");
    }

}
/* async findUserById(uuid: string): Promise<any> {
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

 */