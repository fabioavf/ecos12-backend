import mongoose, { Schema, Model, Document } from 'mongoose';
import { DisciplinaDocument } from './disciplina.model';

type PeriodoDocument = Document & {
  idPeriodo: number;
  periodo: number;
  disciplinas: DisciplinaDocument[];
};

type PeriodoInput = {
  idPeriodo: PeriodoDocument['idPeriodo'];
  periodo: PeriodoDocument['periodo'];
  disciplinas?: DisciplinaDocument[];
};

const PeriodoSchema = new Schema<PeriodoDocument>({
  idPeriodo: { type: Number, required: true },
  periodo: { type: Number, required: true },
  disciplinas: [{ type: Schema.Types.ObjectId, ref: 'Disciplina' }],
});

const Periodo: Model<PeriodoDocument> = mongoose.model('Periodo', PeriodoSchema);

export { Periodo, PeriodoInput, PeriodoDocument };
