// Model
import Routes from '@models/routes/routes.model';

// General controller
import * as factory from '@controllers/factory.controller';
import { PopulateOptions } from 'mongoose';

const getAllRoutes = factory.findAll(Routes);
const createRoute = factory.createOne(Routes);

// Routes that requires id on the params

// For populating fields
const populateRouteOptions: PopulateOptions[] = [
  { path: 'driverId', select: 'firstName' },
  { path: 'vehicleId', select: 'description year' },
];

const getRoute = factory.findOne(Routes, populateRouteOptions);

const updateRoute = factory.updateOne(Routes);
const deleteRoute = factory.deleteOne(Routes);

export { getAllRoutes, createRoute, getRoute, updateRoute, deleteRoute };
