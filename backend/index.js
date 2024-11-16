import express from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// CORS middleware (allow all origins by default)

app.use(cors(
    {
        origin:["book-store-frontend-lemon-three.vercel.app"],
        methods:["GET", "POST", "PUT", "DELETE"], 
        credentials: true
    }
))

// Middleware to parse JSON data
app.use(express.json());
// Books route handler
app.use('/books', booksRoute);

// Default route
app.get('/', (request, response) => {
    console.log('Karunakarcheckpoint', request);
    return response.status(234).send('Welcome to library');
});

// Connect to MongoDB and start the server
mongoose.connect(MONGODBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to Port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
