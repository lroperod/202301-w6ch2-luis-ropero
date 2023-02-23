import { ThingModel } from './thing-schema.js';
import { RequestHandler } from 'express';
import crypto from 'node:crypto';
import { Things } from './things-model.js';

export const getThingsController: RequestHandler = async (_req, res) => {
  try {
    const foundThings = await ThingModel.find({});
    res.json(foundThings);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createThingController: RequestHandler = async (req, res) => {
  const id = crypto.randomUUID();
  const thing: Things = {
    id,
    ...req.body,
  };
  try {
    await ThingModel.create(thing);
    res.status(201).json(thing);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getThingByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const thing = await ThingModel.findById(id);
    if (thing === null) {
      res.sendStatus(404);
    } else {
      res.json(thing);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateThingByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const dbRes = await ThingModel.updateOne({ _id: id }, { ...req.body });
    if (dbRes.matchedCount === 0) {
      res.sendStatus(404);
    }

    if (dbRes.modifiedCount === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteThingByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const dbRes = await ThingModel.deleteOne({ _id: id });
    if (dbRes.deletedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
