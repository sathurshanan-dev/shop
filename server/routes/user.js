import express from 'express';
import {
  login,
  register,
  get_profile,
  update_profile,
} from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.route('/:id').get(auth, get_profile).put(auth, update_profile);

export default router;
