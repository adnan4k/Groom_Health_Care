import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    role:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

export const User = mongoose.model('User', UserSchema);

