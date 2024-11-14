//importing express 
import express from "express";
//importing port 
import {PORT,MONGODBURL} from "./config.js";
//for connecting mongodb
import mongoose from 'mongoose';

const app = express();
//this method will get a resource to our server, the second parameter is a callback here we are receiving req,res
app.get('/',(request,response)=>{
    console.log('Karunakarcheckpoint',request);
    return response.status(234).send('Welcome to library')

});
 

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
