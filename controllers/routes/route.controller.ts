// Model
import Routes, { populateRouteOptions } from '@models/routes/routes.model';

// General controller
import * as factory from '@controllers/factory.controller';

const getAllRoutes = factory.findAll(Routes);
const createRoute = factory.createOne(Routes);

// Routes that requires id on the params
const getRoute = factory.findOne(Routes, populateRouteOptions);
const updateRoute = factory.updateOne(Routes);
const deleteRoute = factory.deleteOne(Routes);

export { getAllRoutes, createRoute, getRoute, updateRoute, deleteRoute };
