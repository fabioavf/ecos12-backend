import mongoose, { Schema, Model, Document } from 'mongoose';

type PeriodoDocument = Document & {
  idPeriodo: number;
  periodo: number;
};

type PeriodoInput = {
  idPeriodo: PeriodoDocument['idPeriodo'];
  periodo: PeriodoDocument['periodo'];
};

const PeriodoSchema = new Schema<PeriodoDocument>({
  idPeriodo: { type: Number, required: true },
  periodo: { type: Number, required: true },
});

const Periodo: Model<PeriodoDocument> = mongoose.model('Periodo', PeriodoSchema);

export { Periodo, PeriodoInput, PeriodoDocument };
