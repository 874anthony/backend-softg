import { Router } from 'express';

// Controller
import * as SchedulerController from '@controllers/schedulers/scheduler.controller';

const router = Router();

router.route('/').get(SchedulerController.getAllSchedulers).post(SchedulerController.createScheduler);

// Routes with the id
router
  .route('/:id')
  .get(SchedulerController.getScheduler)
  .put(SchedulerController.updateScheduler)
  .delete(SchedulerController.deleteScheduler);

export default router;
