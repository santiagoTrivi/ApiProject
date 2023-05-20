import { prop, getModelForClass } from "@typegoose/typegoose";


class User{

    @prop({required: true})
    public uuid: string;

    @prop({required: true})
    public name: string;

    @prop({required: true})
    public email: string;

    @prop({required: true})
    public password: string;

    @prop({required: true})
    public status: boolean;

    @prop({required: false})
    public photoUrl: string;

    @prop({required: false})
    public provider: string;
    
}

export const UserModel = getModelForClass( User );
