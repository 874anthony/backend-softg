import { Schema, model, PopulateOptions } from 'mongoose';

import { IRoute } from './types';

const RouteSchema: Schema<IRoute> = new Schema({
  description: {
    type: String,
    required: [true, 'La descripción de la ruta es requerida'],
    minlength: [15, 'La descripción de la ruta debe tener al menos 15 caracteres'],
  },
  driverId: {
    type: Schema.Types.ObjectId,
    required: [true, 'El id del conductor es requerido'],
    ref: 'driver',
  },
  vehicleId: {
    type: Schema.Types.ObjectId,
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
export const populateRouteOptions: PopulateOptions[] = [
  { path: 'driverId', select: 'firstName' },
  { path: 'vehicleId', select: 'description year' },
];

export default model<IRoute>('route', RouteSchema);
