import { Request, Response, NextFunction } from 'express';

// Model
import Vehicle from '@models/vehicles/vehicles.model';

// General controller
import * as factory from '@controllers/factory.controller';

const getAllVehicles = factory.findAll(Vehicle);
const createVehicle = factory.createOne(Vehicle);

// Routes that requires id on the params
const getVehicle = factory.findOne(Vehicle);
const updateVehicle = factory.updateOne(Vehicle);
const deleteVehicle = factory.deleteOne(Vehicle);

export { getAllVehicles, createVehicle, getVehicle, updateVehicle, deleteVehicle };
