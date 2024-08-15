import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose  from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app=express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling Cross Origin Resource Sharing (CORS Policy)
// Method 1: Allow All
app.use(cors());

// Method 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to Bookstore');
});

app.use('/book',booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App Connected to Database');
    app.listen(PORT, () => {
        console.log(`App is listening to the PORT: ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});