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
        type : String  //product image is a string beause the actaull image is stored in a cdn and the url is saved here
    },
    price : {
        type : Number ,
        default : 0
    } , 
    stock : {
        default : 0 , 
        type : Number 
    }, 
    category: {
        type : mongoose.Schema.types.ObjectId , 
        ref : "Category" ,
        required : true 
    }, 
    owner : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "user"
    }

} , {timestamps : true})

export const Product = mongoose.model("product" , productSchema)

// images can be stored in the db but shoudn't be because it is better 
// to store them in a bucket or something and then put the url here instead