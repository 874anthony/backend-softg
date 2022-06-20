import { PopulateOptions, Schema, Types } from 'mongoose';

export interface IRoute extends Schema {
  description: string;
  driverId: Types.ObjectId;
  vehicleId: Types.ObjectId;
  active: boolean;
  createdAt?: Date;
}
