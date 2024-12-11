import mongoose  from "mongoose";

const TodoSchema = new mongoose.Schema({
    conten : {
        type : string , 
        required : true , 
    },
    complete : {
        type : Boolean ,
        default : false
    },
    createdBy : {
        type : mongoose.Types.ObjectId ,
        ref : "User"
    },
    subtoDos : [
        {
            type : mongoose.Schema.Types.ObjectId, 
            ref : "subtodo"
        }
    ] //array of subtodos
} , {timestamps : true })

export const Todo = mongoose.model("Todo" , TodoSchema )

// models asks for two things 
    // one - what is the name of this model 
    // two - what is the schema of this model


// when mongodb will save this it will save it as Subtodo's'

// import mongoose
// import { DEFAULT_PK_FACTORY } from '../../node_modules/mongodb/src/utils';
// import { SubtoDo } from './sub_todo.model';
// create the required schema - i.e the required structure for the data
// name this scema and export it as a model 