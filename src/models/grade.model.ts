import mongoose, { Schema, Model, Document } from 'mongoose';

type GradeDocument = Document & {
  idGrade: number;
  curso: string;
  ano: number;
};

type GradeInput = {
  idGrade: GradeDocument['idGrade'];
  curso: GradeDocument['curso'];
  ano: GradeDocument['ano'];
};

const GradeSchema = new Schema<GradeDocument>({
  idGrade: { type: Number, required: true },
  curso: { type: String, required: true },
  ano: { type: Number, required: true },
});

const Grade: Model<GradeDocument> = mongoose.model('Grade', GradeSchema);

export { Grade, GradeInput, GradeDocument };
