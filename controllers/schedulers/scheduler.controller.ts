// Model
import Scheduler, { populateSchedulerOpts } from '@models/schedulers/scheduler.model';

// General controller
import * as factory from '@controllers/factory.controller';
import { PopulateOptions } from 'mongoose';

const getAllSchedulers = factory.findAll(Scheduler);
const createScheduler = factory.createOne(Scheduler);

// Routes that requires id on the params
const getScheduler = factory.findOne(Scheduler, populateSchedulerOpts);
const updateScheduler = factory.updateOne(Scheduler);
const deleteScheduler = factory.deleteOne(Scheduler);

export { getAllSchedulers, createScheduler, getScheduler, updateScheduler, deleteScheduler };
