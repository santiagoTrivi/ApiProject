import { ObjectId } from "mongoose";
import { UserView } from "../user/domain/UserEntityInterface";


export  interface JsonWebToken{
    generateJWT(user: UserView): Promise<any>;
}
