import { Router } from 'express';
import { createGrade, deleteGrade, getAllGrades, getGrade, updateGrade } from '../controllers/grade.controller';

const gradeRoute = () => {
  const router = Router();

  router.post('/grades', createGrade);

  router.get('/grades', getAllGrades);

  router.get('/grades/:id', getGrade);

  router.put('/grades/:id', updateGrade);

  router.delete('/grades/:id', deleteGrade);

  return router;
};

export { gradeRoute };
