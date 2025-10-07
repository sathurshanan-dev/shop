import express from 'express';
import {
  create_order,
  get_order_by_id,
  get_my_orders,
} from '../controllers/order.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, create_order);
router.get('/mine', auth, get_my_orders);
router.get('/:id', auth, get_order_by_id);

export default router;
