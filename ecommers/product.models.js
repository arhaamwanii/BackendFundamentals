import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : { 
        type : String  , 
        required : true 
    } ,
    name : {
        required : true , 
        type : String
    },
    productImage : {
        type : String 
    }
} , {timestamps : true})

export const Product = mongoose.model("product" , productSchema)

// images can be stored in the db but shoudn't be because it is better 
// to store them in a bucket or something and then put the url here instead