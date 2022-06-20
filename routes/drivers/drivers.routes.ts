import { Router } from 'express';

// Controller
import * as DriverController from '@controllers/drivers/driver.controller';

const router = Router();

router.route('/').get(DriverController.getAllDrivers).post(DriverController.createDriver);

// Routes with the id
router
  .route('/:id')
  .get(DriverController.getDriver)
  .put(DriverController.updateDriver)
  .delete(DriverController.deleteDriver);

export default router;
