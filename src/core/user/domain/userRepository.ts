import { UserEntity } from "./UserEntityInterface";



export interface UserRepository{
    createUser(user: UserEntity): Promise<any | null>;
    findById(uuid: string): Promise<any | null>;
    exist(input_email: string): Promise<boolean>
    findAll(): Promise<any | null>
    UpdateUser(): void;
    deleteUser(uuid: string): void;
}

