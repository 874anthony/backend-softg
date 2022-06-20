"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateSchedulerOpts = void 0;
const mongoose_1 = require("mongoose");
const SchedulerSchema = new mongoose_1.Schema({
    routeId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'route' },
    weekNum: { type: Number, required: true, min: 1, max: 52 },
    from: { type: String, required: [true, 'Por favor, especificar de donde partirá'] },
    to: { type: String, required: [true, 'Por favor, especificar hacia donde llegará'] },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
});
// For populating fields
exports.populateSchedulerOpts = {
    path: 'routeId',
    select: 'description',
    populate: [
        { path: 'driverId', select: 'firstName' },
        { path: 'vehicleId', select: 'year' },
    ],
};
exports.default = (0, mongoose_1.model)('Scheduler', SchedulerSchema);
