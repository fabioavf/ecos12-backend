import mongoose, { Schema, Model, Document } from 'mongoose';
import { PeriodoDocument } from './periodo.model';

type GradeDocument = Document & {
  idGrade: number;
  curso: string;
  ano: number;
  periodos: PeriodoDocument[];
};

type GradeInput = {
  idGrade: GradeDocument['idGrade'];
  curso: GradeDocument['curso'];
  ano: GradeDocument['ano'];
  periodos?: PeriodoDocument[];
};

const GradeSchema = new Schema<GradeDocument>({
  idGrade: { type: Number, required: true },
  curso: { type: String, required: true },
  ano: { type: Number, required: true },
  periodos: [{ type: Schema.Types.ObjectId, ref: 'Periodo' }],
});

const Grade: Model<GradeDocument> = mongoose.model('Grade', GradeSchema);

export { Grade, GradeInput, GradeDocument };
