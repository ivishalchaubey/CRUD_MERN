import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
});

const UserModel = mongoose.model('user',UserSchema);

export default UserModel;