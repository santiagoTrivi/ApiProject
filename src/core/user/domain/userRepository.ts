import { UserEntity } from "./UserEntityInterface";


export interface UserRepository{
    findUserById(uuid: string): Promise<any | null>;
    registerUser(user: UserEntity): Promise<any | null>;
    findOne({email}: {email: string}): Promise<any | null>
}

