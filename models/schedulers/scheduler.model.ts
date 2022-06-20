import { Schema, model, PopulateOptions } from 'mongoose';

import { IScheduler } from './types';

const SchedulerSchema: Schema<IScheduler> = new Schema({
  routeId: { type: Schema.Types.ObjectId, required: true, ref: 'route' },
  weekNum: { type: Number, required: true, min: 1, max: 52 },
  from: { type: String, required: [true, 'Por favor, especificar de donde partirá'] },
  to: { type: String, required: [true, 'Por favor, especificar hacia donde llegará'] },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
});

// For populating fields
export const populateSchedulerOpts: PopulateOptions = {
  path: 'routeId',
  select: 'description',
  populate: [
    { path: 'driverId', select: 'firstName' },
    { path: 'vehicleId', select: 'year' },
  ],
};

export default model<IScheduler>('Scheduler', SchedulerSchema);
