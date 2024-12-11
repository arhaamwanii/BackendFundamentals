import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username : {
        type : string , 
        required : true ,
        unique : true,
        lowercase : true
    },
    email : {
        type : string , 
        required : true , 
        unique : true ,
        lowercase : true, 
        
    },
    password : {
        type : string ,
        required : [true , 'password is required'] , 
    },
} , {timestamps : true })

export const User = mongoose.model("User" , userSchema)

// custom messages can also be passed - that will be shwon 
// [value , 'message to be sent']