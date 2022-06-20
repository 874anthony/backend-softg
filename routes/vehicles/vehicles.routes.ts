import { Router } from 'express';

// Controller
import * as VehicleController from '@controllers/vehicles/vehices.controller';

const router = Router();

router.route('/').get(VehicleController.getAllVehicles).post(VehicleController.createVehicle);

// Routes with the id
router
  .route('/:id')
  .get(VehicleController.getVehicle)
  .put(VehicleController.updateVehicle)
  .delete(VehicleController.deleteVehicle);

export default router;
