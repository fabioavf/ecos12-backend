import { Router } from 'express';
import { createDisciplina, deleteDisciplina, getAllDisciplinas, getDisciplina, updateDisciplina } from 'src/controllers/disciplina.controller';

const disciplinaRoute = () => {
  const router = Router();

  router.post('/disciplinas', createDisciplina);

  router.get('/disciplinas', getAllDisciplinas);

  router.get('/disciplinas/:id', getDisciplina);

  router.put('/disciplinas/:id', updateDisciplina);

  router.delete('/disciplinas/:id', deleteDisciplina);

  return router;
};

export { disciplinaRoute };
