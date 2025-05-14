import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";


const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(MONGODB_URI)
        if(connect){
            console.log("Connected to DB");
        }else{
            throw new Error("Could not connect to DB");
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export default connectDB;