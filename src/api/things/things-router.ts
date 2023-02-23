import {
  createThingController,
  deleteThingByIdController,
  getThingByIdController,
  getThingsController,
  updateThingByIdController,
} from './things-controller.js';
import express from 'express';

const router = express.Router();

router.route('/').get(getThingsController).post(createThingController);

router
  .route('/:id')
  .get(getThingByIdController)
  .patch(updateThingByIdController)
  .delete(deleteThingByIdController);

export default router;
