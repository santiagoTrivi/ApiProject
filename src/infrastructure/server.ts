import express, { Application } from  'express';
import cors from 'cors';
import morgan  from 'morgan';
import mongoConnect from './database/mongoConnection';
import userRouter from './routes/userRoute';
import { errorHanddler } from './middlewares/errorHandle';


export default class Server{

    private app: Application
    private port: number;

    
    constructor(port: number){
        this.app = express();
        this.port = port;
        this.dataBaseConnection();
        this.middlewares();
        this.routes();
    }

    async dataBaseConnection(){
        await mongoConnect();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(userRouter)

        
        this.app.use(errorHanddler)
    }

    
    
    listen(){
        this.app.listen(this.port, () =>{
            console.log(`server running at http://localhost:${this.port}`)
        })
    }


};