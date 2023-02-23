import mongoose from "mongoose";

const config = async()=>{
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect('mongodb://localhost:27017/CRUD-Demo');
        console.log("Database Connected Successfully...");
    } catch (error) {
        console.log("Error While Calling ..");
    }
}

export default config;