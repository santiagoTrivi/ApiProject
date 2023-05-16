export interface UserEntity{
    uuid: string
    name: string
    email: string
    password: string
    photoUrl?: string
    provider?: string
    status: boolean

};

export interface UserView{
    uuid: string
    name: string
    email: string
    photoUrl?: string
    status: boolean
}