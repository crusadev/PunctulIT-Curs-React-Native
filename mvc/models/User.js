import mongoose from "mongoose"
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:[true,"Completati cu prenumele Dvs. "]
    },
    lastName:{
        type:String,
        required:[true,"Completati cu numele Dvs. de familie "]
    },
    email:{
        type:String,
        required:[true,"Completati cu adresa de email"],
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    recipes:{
        type:[Schema.Types.ObjectId],
        ref:"Recipe",
    },
    points:{
        type:Number,
        default:0
    }
})

export const User = mongoose.model("User",UserSchema);