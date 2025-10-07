import express from 'express';
import { set_order_to_paid } from '../controllers/order.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create-checkout-session', auth, set_order_to_paid);

export default router;
