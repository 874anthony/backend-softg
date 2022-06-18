import { Router } from 'express';

// Routes of the application
import DriverRouter from '@routes/drivers/drivers.routes';
import VehicleRouter from '@routes/vehicles/vehicles.routes';

const router = Router();

router.use('/drivers', DriverRouter);
router.use('/vehicles', VehicleRouter);

export default router;
