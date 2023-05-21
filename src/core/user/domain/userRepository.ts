import { UserEntity } from "./UserEntityInterface";
import UserObjectValue from "./UserObjectValue";



export interface UserRepository{
    createUser(user: UserEntity): Promise<any | null>;
    findById(uuid: string): Promise<any | null>;
    findOne(input_email: string): Promise<UserObjectValue>;
    exist(input_email: string): Promise<boolean>
    findAll(): Promise<any | null>
    UpdateUser(): void;
    deleteUser(uuid: string): void;
}

