import { Router } from 'express';

// Controller
import * as RouteController from '@controllers/routes/route.controller';

const router = Router();

router.route('/').get(RouteController.getAllRoutes).post(RouteController.createRoute);

// Routes with the id
router
  .route('/:id')
  .get(RouteController.getRoute)
  .put(RouteController.updateRoute)
  .delete(RouteController.deleteRoute);

export default router;
