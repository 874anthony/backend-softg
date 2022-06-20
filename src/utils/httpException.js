"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.message = message;
        this.isOperational = true;
        // To capture the stack race (the logs)
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = HttpException;
