import { Request, Response } from 'express';
import { Disciplina, DisciplinaInput } from '../models/disciplina.model';

const createDisciplina = async (req: Request, res: Response) => {
  const { cargaHoraria, coRequisito, codDisciplina, ementa, nome, preRequisitos } = req.body;

  if (!codDisciplina || !nome || !cargaHoraria || !ementa) {
    return res.status(422).json({
      message: 'The fields codDisciplina, nome, cargaHoraria, and ementa are required',
    });
  }

  const disciplinaInput: DisciplinaInput = {
    codDisciplina,
    nome,
    cargaHoraria,
    ementa,
    preRequisitos,
    coRequisito,
  };

  const disciplinaCreated = await Disciplina.create(disciplinaInput);

  return res.status(201).json(disciplinaCreated);
};

const getAllDisciplinas = async (req: Request, res: Response) => {
  const disciplinas = await Disciplina.find();

  return res.status(200).json({ data: disciplinas });
};

const getDisciplina = async (req: Request, res: Response) => {
  const { id } = req.params;

  const disciplina = await Disciplina.findOne({ _id: id });

  if (!disciplina) {
    return res.status(404).json({ message: `Disciplina with id "${id} not found.` });
  }

  return res.status(200).json({ data: disciplina });
};

const updateDisciplina = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { cargaHoraria, coRequisito, codDisciplina, ementa, nome, preRequisitos } = req.body;

  const disciplina = await Disciplina.findOne({ _id: id });

  if (!disciplina) {
    return res.status(404).json({ message: `Disciplina with id "${id} not found.` });
  }

  if (!codDisciplina || !nome || !cargaHoraria || !ementa) {
    return res.status(422).json({
      message: 'The fields codDisciplina, nome, cargaHoraria, and ementa are required',
    });
  }

  await Disciplina.updateOne({ _id: id }, { codDisciplina, nome, cargaHoraria, ementa, preRequisitos, coRequisito });

  const disciplinaUpdated = await Disciplina.findById(id);

  return res.status(200).json({ data: disciplinaUpdated });
};

const deleteDisciplina = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Disciplina.findByIdAndDelete(id);

  return res.status(200).json({ data: 'Disciplina deleted' });
};

const findByName = async (req: Request, res: Response) => {
  const { codDisciplina } = req.body;

  const disciplina = await Disciplina.findOne({ codDisciplina });

  if (!disciplina) {
    return res.status(404).json({ message: `Disciplina with name "${codDisciplina}" not found.` });
  }

  return res.status(200).json({ data: disciplina });
};

export { createDisciplina, getAllDisciplinas, getDisciplina, updateDisciplina, deleteDisciplina, findByName };
