import { Request, Response, NextFunction } from 'express';

// Model
import Driver from '@models/drivers/drivers.model';

// General controller
import * as factory from '@controllers/factory.controller';

const getAllDrivers = factory.findAll(Driver);
const createDriver = factory.createOne(Driver);

// Routes that requires id on the params
const getDriver = factory.findOne(Driver);
const updateDriver = factory.updateOne(Driver);
const deleteDriver = factory.deleteOne(Driver);

export { getAllDrivers, createDriver, getDriver, updateDriver, deleteDriver };
