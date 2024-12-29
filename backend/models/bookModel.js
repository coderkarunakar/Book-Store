//creating model as  book ,collection cat , schema  as bookSchema
import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true, 
    },
    
},
{
    timestamps:true,
}
);
//here Book is called model name, cat is the name of the collection in db,bookSchema is the schema defined structure and rules for documents in the cat collection,and the individual enteries that will be stored inside the cat collection..
 export const   Book = mongoose.model('Cat', bookSchema);
