import { Router } from 'express';

// Routes of the application
import DriverRouter from '@routes/drivers/drivers.routes';
import VehicleRouter from '@routes/vehicles/vehicles.routes';
import RouteRouter from '@routes/route/route.routes';
import SchedulerRouter from '@routes/schedulers/scheduler.routes';

const router = Router();

router.use('/drivers', DriverRouter);
router.use('/vehicles', VehicleRouter);
router.use('/routes', RouteRouter);
router.use('/schedulers', SchedulerRouter);

export default router;
