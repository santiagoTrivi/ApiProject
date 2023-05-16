import dotenv from 'dotenv';


dotenv.config()

const MONGODB = process.env.MONGODB || '';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;


export const config = {
    mongo:{
        url: MONGODB
    },
    server:{
        port: PORT
    }
}