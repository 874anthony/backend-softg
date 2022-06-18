"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendErrorDev = (err, req, res) => {
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
exports.default = (err, req, res, next) => {
    err.status = err.status || 500;
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
    }
};
