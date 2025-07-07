import express from 'express'
import { testFunction } from '../controllers/user.controller.js';

const router= express.Router();

router.get('/', testFunction)

export default router;