import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    image:{
        type:String
    }
})

export const News = mongoose.model('News', NewsSchema);

