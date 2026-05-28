import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
            mongoose.connect(process.env.MONGO_URL);
            console.log("MongoDB connected successfully");
        }
    catch(error){
        console.log("MongoDB connection failed");
        console.log(error);
        process.exit(1);
    }
}

