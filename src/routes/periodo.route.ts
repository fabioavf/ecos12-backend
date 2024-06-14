import { Router } from 'express';
import { createPeriodo, deletePeriodo, getAllPeriodos, getPeriodo, updatePeriodo } from 'src/controllers/periodo.controller';

const periodoRoute = () => {
  const router = Router();

  router.post('/periodos', createPeriodo);

  router.get('/periodos', getAllPeriodos);

  router.get('/periodos/:id', getPeriodo);

  router.put('/periodos/:id', updatePeriodo);

  router.delete('/periodos/:id', deletePeriodo);

  return router;
};

export { periodoRoute };
