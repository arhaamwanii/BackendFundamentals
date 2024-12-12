import mongoose from "mongoose"

const orderItemScema = new mongoose.Schema({
    prductId : {
        type : mongoose.Schema.Type.ObjectId  , // id is generated by mongoDB
        ref : "Product"
    }, 
    quantity : { 
        type : Number , 
        required : true
    } 
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type : Number , 
        required : true 
    } ,
    customer : { 
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    },
    orderitems : {
        type : [orderItemScema] 
    } , 
    adress : {
        type : string , 
        required : true
    } ,
    status : { 
        type : String , 
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"], // enum means choices - 
        default : "PENDING"          
    }
    
} , {timestamps : true })


export const Order = mongoose.model("Order" , orderSchema)


// enum is used when we want to specify -- i.e set the options for what comes in and we have to then choose only from that 