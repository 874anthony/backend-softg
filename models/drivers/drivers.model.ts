import { Schema, model } from 'mongoose';
import { IDriver } from './types';

// Definying the schema
const DriverSchema: Schema<IDriver> = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model<IDriver>('driver', DriverSchema);
