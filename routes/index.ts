import { Router } from 'express';

// Routes of the application
import DriverRouter from '@routes/drivers/drivers.routes';

const router = Router();

router.use('/drivers', DriverRouter);

export default router;
