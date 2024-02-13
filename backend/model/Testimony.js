import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export const Testimony = mongoose.model('Testimony', TestimonySchema);

