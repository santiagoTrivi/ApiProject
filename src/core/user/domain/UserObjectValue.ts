import { uuid } from "uuidv4";
import { UserEntity } from "./UserEntityInterface";


export default class UserObjectValue implements UserEntity{
    uuid: string;
    name: string;
    email: string;
    password: string;
    photoUrl?: string | undefined;
    provider?: string | undefined;
    status: boolean;

    constructor(name: string, email: string, password: string, url?: string, provider?: string){
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = true;
        this.photoUrl = url || undefined;
        this.provider = provider || undefined;
    }
   
}