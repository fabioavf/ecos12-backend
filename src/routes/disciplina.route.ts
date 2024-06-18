import { Router } from 'express';
import {
  createDisciplina,
  deleteDisciplina,
  findByName,
  getAllDisciplinas,
  getDisciplina,
  updateDisciplina,
} from '../controllers/disciplina.controller';

const disciplinaRoute = () => {
  const router = Router();

  router.post('/disciplinas', createDisciplina);

  router.post('/findDisciplina', findByName);

  router.get('/disciplinas', getAllDisciplinas);

  router.get('/disciplinas/:id', getDisciplina);

  router.put('/disciplinas/:id', updateDisciplina);

  router.delete('/disciplinas/:id', deleteDisciplina);

  return router;
};

export { disciplinaRoute };
