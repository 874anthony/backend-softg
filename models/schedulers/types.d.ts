import { Schema, Types } from 'mongoose';

export interface IScheduler extends Schema {
  routeId: Types.ObjectId;
  weekNum: number;
  from: string;
  to: string;
  active: boolean;
  createdAt?: Date;
}
