import { Hasher } from "../../common/hasherObjectInterface";
import { UserRepository } from "../domain/userRepository";





export default class Authentication{

    constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher){}

    public async login(){
        
    }
}