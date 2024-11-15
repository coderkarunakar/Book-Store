import express from 'express';
import {Book} from '../models/bookModel.js';


const router = express.Router();
//Route for save a new Book

//creating a book using post
router.post('/', async(request,response) =>{
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
router.get('/',async(request,response) =>{
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
router.get('/:id',async(request,response) =>{
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
 

//Route for updating a book
// Route for updating a book
router.put('/:id', async (request, response) => {
    try {
          // Check if request.body is undefined
          if (!request.body) {
            return response.status(400).send({
                message: 'Request body is missing or not parsed correctly',
            });
        }

        // Check for required fields
        const { title, author, description } = request.body;
        if (!title || !author || !description) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, description'
            });
        }

        const { id } = request.params;

        // Find and update the book, returning the updated document
        const result = await Book.findByIdAndUpdate(id, request.body, { new: true });

        // Check if the book exists
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }

        // Successfully updated
        return response.status(200).json({ message: "Book has been updated successfully", data: result });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//Deleting a Book
// Route for deleting a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Attempt to delete the book by ID
        const result = await Book.findByIdAndDelete(id);

        // Check if the book was found and deleted
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }

        // If deleted successfully, send a success message
        return response.status(200).json({ message: "Book deleted successfully" });

    } catch (error) {
        console.log(error.message);
        // If there's an error, send a 500 status
        response.status(500).send({ message: error.message });
    }
});
// booksRoute.js this will simply export our booksRoute.js file

export default router;

