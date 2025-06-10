import { Router } from 'express';
import { getCarts } from '../controllers/cartController';
import protect from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getCarts);

export default router;
