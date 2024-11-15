//importing express 
import express, { response } from "express";
//importing port 
import {PORT,MONGODBURL} from "./config.js";
//for connecting mongodb
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
//here we are importing whole file so we named it as its file name booksRoute
import booksRoute from './routes/booksRoute.js';





const app = express();
//this method will get a resource to our server, the second parameter is a callback here we are receiving req,res
app.get('/',(request,response)=>{
    console.log('Karunakarcheckpoint',request);
    return response.status(234).send('Welcome to library')

});
//in order read our json data we are using a middle ware, with this only our postman reads json data
//middle ware for parsing request 
app.use(express.json());
 //When a request is made to a URL starting with /books, this middleware will be triggered.
//  booksRoute is a reference to a route handler module it is imported at top
//here we are using
app.use('/books',booksRoute);


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
