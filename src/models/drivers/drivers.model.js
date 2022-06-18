"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Definying the schema
const DriverSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 4,
    },
    ssn: {
        type: Number,
        required: true,
        min: 8,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        min: 8,
        unique: true,
    },
    zip: {
        type: Number,
        required: true,
        min: 5,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
exports.default = (0, mongoose_1.model)('driver', DriverSchema);
