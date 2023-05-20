import { ObjectId } from "mongoose"

export interface UserEntity{
    id?: ObjectId
    uuid: string
    name: string
    email: string
    password: string
    photoUrl?: string
    provider?: string
    status: boolean

};

export interface UserView{
    id?: ObjectId
    uuid: string
    name: string
    email: string
    photoUrl?: string
    status: boolean
}