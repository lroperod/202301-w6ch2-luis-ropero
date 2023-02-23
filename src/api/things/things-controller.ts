import { RequestHandler } from 'express';
import crypto from 'node:crypto';
import { createThings, findAll, findById, Things } from './things-model.js';

export const getThingsController: RequestHandler = (_req, res) => {
  res.json(findAll());
};

export const createThingController: RequestHandler = (req, res) => {
  const id = crypto.randomUUID();
  const things: Things = {
    id,
    ...req.body,
  };
  createThings(things);
  res.status(201).json(things);
};

export const getThingByIdController: RequestHandler = (req, res) => {
  const { id } = req.params;
  const things = findById(id);
  if (things === undefined) {
    res.sendStatus(404);
  } else {
    res.json(things);
  }
};

export const updateThingByIdController: RequestHandler = (req, res) => {
  res.sendStatus(405);
};

export const deleteThingByIdController: RequestHandler = (req, res) => {
  res.sendStatus(405);
};
