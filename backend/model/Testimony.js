import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema({
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

export const Testimony = mongoose.model('Testimony', TestimonySchema);

