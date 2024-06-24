import { getCurso } from "../controllers/getCurso";
import { getDisciplinas } from "../controllers/getDisciplinas";
import { getGrade } from "../controllers/getGrade";
import { getPeriodo } from "../controllers/getPeriodo";

const express = require('express');

const router = express.Router();

// console.log(router);

router.get('/grade/:idGrade', getGrade);

router.get('/periodo/:idGrade/:idPeriodo', getPeriodo);

router.get('/disciplina/:codDisciplina', getDisciplinas);

router.get('/:idCurso', getCurso);

module.exports = router;