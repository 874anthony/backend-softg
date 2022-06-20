"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateRouteOptions = void 0;
const mongoose_1 = require("mongoose");
const RouteSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: [true, 'La descripción de la ruta es requerida'],
        minlength: [15, 'La descripción de la ruta debe tener al menos 15 caracteres'],
    },
    driverId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'El id del conductor es requerido'],
        ref: 'driver',
    },
    vehicleId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'El id del vehículo es requerido'],
        ref: 'vehicle',
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
// For populating fields
exports.populateRouteOptions = [
    { path: 'driverId', select: 'firstName' },
    { path: 'vehicleId', select: 'description year' },
];
exports.default = (0, mongoose_1.model)('route', RouteSchema);
