// Importing the required modules
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Package for module-alias
import 'module-alias/register';

// API Routes
import router from '@routes/index';

// Utils
import HttpException from '@utils/httpException';
import globalErrorHandler from '@controllers/error.controller';

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

app.use('/api/softg/v1', router);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(`No hay una ruta ${req.originalUrl} en este servidor!`, 404));
});

app.use(globalErrorHandler);

export default app;
