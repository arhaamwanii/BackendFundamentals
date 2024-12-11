import mongoose, { mongo } from "mongoose";

const subToDoSchema = new mongoose.Schema({
    content : {
        type : string , 
        required : true
    } ,
    complete : {
        type : Boolean ,
        default : false
    }, 
    createdBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User "
    }
} , {timestamps : true})


export const SubtoDo = mongoose.model("subtodo" , subToDoSchema)

// two constants one to store the schema of the data 
// second to store the actual model - which has the schema inside 
// mongoose gives pre defined -- functions that are then used to fill in the data