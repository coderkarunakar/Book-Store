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
 export const   Book = mongoose.model('Cat', bookSchema);
