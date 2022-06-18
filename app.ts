// Importing the required modules
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Initializing the express app
const app = express();

// To handle cors errors
app.use(cors());

// To parse the request body to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Getting the logs.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
