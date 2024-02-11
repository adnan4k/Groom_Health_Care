import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export const Service = mongoose.model('Service', ServiceSchema);

