import mongoose, { Schema } from 'mongoose';

const thingSchema = new Schema({
  id: String,
  subjectsLearned: String,
});

export const ThingModel = mongoose.model(
  'Thing',
  thingSchema,
  'thing-already-know',
);
