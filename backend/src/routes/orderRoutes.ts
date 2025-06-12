import { Router } from 'express';
import { getOrderByUserId } from '../controllers/orderController';

const router = Router();

router.get('/:id', getOrderByUserId);

export default router;
