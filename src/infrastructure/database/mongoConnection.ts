import mongoose from "mongoose";
import { config } from "../config/config";

const url = config.mongo.url;

const mongoConnect = async() => {
    try {
        await mongoose.connect(url);
        console.log(`mongo database connected`);
        
    } catch (error) {
        console.log(`failed to connect to mongo`);
    }
};


export default mongoConnect;