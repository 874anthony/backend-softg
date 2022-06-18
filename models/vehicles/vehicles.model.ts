import { Schema, model } from 'mongoose';

import { IVehicle } from './types';

const VehicleSchema: Schema<IVehicle> = new Schema({
  description: {
    type: String,
    required: [true, 'La descripción del vehículo es requerida'],
    minlength: [15, 'La descripción del vehículo debe tener al menos 15 caracteres'],
  },
  year: {
    type: Number,
    required: [true, 'El año del vehículo es requerido'],
    min: [1900, 'El año del vehículo debe ser mayor a 1900'],
    max: [2099, 'El año del vehículo debe ser menor a 2099'],
  },
  make: {
    type: String,
    required: [true, 'La marca del vehículo es requerida'],
  },
  capacity: {
    type: Number,
    required: [true, 'La capacidad del vehículo es requerida'],
    min: [1, 'La capacidad del vehículo debe ser mayor a 1'],
    max: [10, 'La capacidad del vehículo debe ser menor a 10'],
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

export default model<IVehicle>('vehicle', VehicleSchema);
