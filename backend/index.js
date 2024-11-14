//importing express 
import express from "express";
//importing port 
import {PORT,MONGODBURL} from "./config.js";
//for connecting mongodb
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js'



const app = express();
//this method will get a resource to our server, the second parameter is a callback here we are receiving req,res
app.get('/',(request,response)=>{
    console.log('Karunakarcheckpoint',request);
    return response.status(234).send('Welcome to library')

});
 

//in order read our json data we are using a middle ware, with this only our postman reads json data
//middle ware for parsing request 
app.use(express.json());

//Route for save a new Book

//creating a book using post
app.post('/books', async(request,response) =>{
    try{
        //here simply i was checking wheather all the necessary field are there or not , if not it will throw an error with status code 400

        if( 
            !request.body.title ||
            !request.body.author ||
            !request.body.description
        ){
            return response.status(400).send({
                message:'Send all required fields: title, author, description'
            })
        }
        //creating a variable for new book
        const newBook = {
            title: request.body.title,
            author:request.body.author,
            description: request.body.description
        }
        //.create a mongoose helper function to create a new document
        const book = await  Book.create(newBook);
        //201 means created and .send sends the created book object as the response body
        return  response.status(201).send(book);
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})


//Route for geting all the books from database
app.get('/books',async(request,response) =>{
    try{
        //find is an helper function in mongoose 
       const books = await Book.find({});
       //here we are trying to print the count i.e books length,and storing our books object inside our data array
       return response.status(200).json({
        count:books.length,
        data:books
       });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})


//Route for geting all the books from database by id    
app.get('/books/:id',async(request,response) =>{
    try{
        const {id}  = request.params;

        //find is an helper function in mongoose 
       const book = await Book.findById(id);
       //here we are trying to print the count i.e books length,and storing our books object inside our data array
       return response.status(200).json(book);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})
 

//here am passing our mongodb url as parameter
mongoose.connect(MONGODBURL)
.then(()=>{
    console.log("App connected to  database");
    app.listen (PORT ,() =>{
        console.log(`App is listening to Port :${PORT}`);
    })
}).catch((error) =>{
    console.log(error);
});
