import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    reason:{
        type:String
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

})

export const Appointment = mongoose.model('Appointment', NewsSchema);

