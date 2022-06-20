import { Schema } from 'mongoose';

export interface IVehicle extends Schema {
  description: string;
  year: number;
  make: string;
  capacity: number;
  active: boolean;
  createdAt?: Date;
}
