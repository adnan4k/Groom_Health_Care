import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
    title:{
        type:String
    },
    name:{
        type:String
    },
    experience:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export const Staff = mongoose.model('Staff', StaffSchema);

