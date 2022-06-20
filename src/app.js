"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// Package for module-alias
require("module-alias/register");
// API Routes
const index_1 = __importDefault(require("@routes/index"));
// Utils
const httpException_1 = __importDefault(require("@utils/httpException"));
const error_controller_1 = __importDefault(require("@controllers/error.controller"));
// Initializing the express app
const app = (0, express_1.default)();
// To handle cors errors
app.use((0, cors_1.default)());
// To parse the request body to JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Getting the logs.
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use('/api/softg/v1', index_1.default);
app.all('*', (req, res, next) => {
    next(new httpException_1.default(`No hay una ruta ${req.originalUrl} en este servidor!`, 404));
});
app.use(error_controller_1.default);
exports.default = app;
