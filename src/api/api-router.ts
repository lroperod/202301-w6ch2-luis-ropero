import express from 'express';
import thingsRouter from './things/things-router.js';

const router = express.Router();

router.use('/things', thingsRouter);

export default router;
