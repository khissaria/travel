import express from 'express';
import { signin, signUp } from '../controller/user.js';

const router = express.Router();

router.post('/signIn',signin);
router.post('/register',signUp);

export default router;