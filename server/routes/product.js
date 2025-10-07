import express from 'express';
import { get_products, get_product } from '../controllers/product.js';
import object_id from '../middleware/object_id.js';

const router = express.Router();

router.get('/', get_products);
router.get('/:id', object_id, get_product);

export default router;
