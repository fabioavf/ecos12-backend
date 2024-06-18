import { Request, Response } from 'express';
import { Periodo, PeriodoInput } from '../models/periodo.model';

const createPeriodo = async (req: Request, res: Response) => {
  const { idPeriodo, periodo } = req.body;

  if (!periodo || !idPeriodo) {
    return res.status(422).json({
      message: 'The fields periodo and idPeriodo are required',
    });
  }

  const periodoInput: PeriodoInput = {
    idPeriodo,
    periodo,
    disciplinas: [],
  };

  const periodoCreated = await Periodo.create(periodoInput);

  return res.status(201).json(periodoCreated);
};

const getAllPeriodos = async (req: Request, res: Response) => {
  const periodos = await Periodo.find();

  return res.status(200).json({ data: periodos });
};

const getPeriodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const periodo = await Periodo.findOne({ _id: id });

  if (!periodo) {
    return res.status(404).json({ message: `Periodo with id "${id} not found.` });
  }

  return res.status(200).json({ data: periodo });
};

const updatePeriodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { idPeriodo, periodo } = req.body;

  const periodoObj = await Periodo.findOne({ _id: id });

  if (!periodoObj) {
    return res.status(404).json({ message: `Periodo with id "${id} not found.` });
  }

  if (!periodo || !idPeriodo) {
    return res.status(422).json({
      message: 'The fields periodo and idPeriodo are required',
    });
  }

  await Periodo.updateOne({ _id: id }, { idPeriodo, periodo });

  const periodoUpdated = await Periodo.findById(id);

  return res.status(200).json({ data: periodoUpdated });
};

const deletePeriodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const periodo = await Periodo.findByIdAndDelete(id);

  if (!periodo) {
    return res.status(404).json({ message: `Periodo with id "${id} not found.` });
  }

  return res.status(200).json({ data: `Periodo with id "${id}" deleted successfully.` });
};

export { createPeriodo, getAllPeriodos, getPeriodo, updatePeriodo, deletePeriodo };
