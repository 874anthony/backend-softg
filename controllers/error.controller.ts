import { Request, Response, NextFunction } from 'express';
import httpException from '@utils/httpException';
import HttpException from '@utils/httpException';

const sendErrorDev = (err: HttpException, req: Request, res: Response) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.status).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
};

export default (err: httpException, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 500;

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  }
};
