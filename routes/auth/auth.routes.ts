import { Router } from 'express';

// Controller
import { createUser, login } from '@controllers/auth/auth.controller';

const router = Router();

router.route('/create-user').post(createUser);
router.route('/login').post(login);

export default router;
