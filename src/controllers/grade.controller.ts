import { Request, Response } from 'express';
import { Grade, GradeInput } from '../models/grade.model';

const createGrade = async (req: Request, res: Response) => {
  const { ano, curso, idGrade } = req.body;

  if (!curso || !ano) {
    return res.status(422).json({
      message: 'The fields curso and ano are required',
    });
  }

  const gradeInput: GradeInput = {
    idGrade,
    curso,
    ano,
  };

  const gradeCreated = Grade.create(gradeInput);

  return res.status(201).json({ data: gradeCreated });
};

const getAllGrades = async (req: Request, res: Response) => {
  const grades = await Grade.find();

  return res.status(200).json({ data: grades });
};

const getGrade = async (req: Request, res: Response) => {
  const { id } = req.params;

  const grade = await Grade.findOne({ _id: id });

  if (!grade) {
    return res.status(404).json({ message: `Grade with id "${id} not found.` });
  }

  return res.status(200).json({ data: grade });
};

const updateGrade = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ano, curso } = req.body;

  const grade = await Grade.findOne({ _id: id });

  if (!grade) {
    return res.status(404).json({ message: `Grade with id "${id} not found.` });
  }

  if (!curso || !ano) {
    return res.status(422).json({
      message: 'The fields curso and ano are required',
    });
  }

  await Grade.updateOne({ _id: id }, { curso, ano });

  const gradeUpdated = await Grade.findById(id);

  return res.status(200).json({ data: gradeUpdated });
};

const deleteGrade = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Grade.findByIdAndDelete(id);

  return res.status(200).json({ message: `Grade with id "${id}" deleted.` });
};

export { createGrade, getAllGrades, getGrade, updateGrade, deleteGrade };
