import mongoose, { Schema, Model, Document } from 'mongoose';

type DisciplinaDocument = Document & {
  codDisciplina: string;
  nome: string;
  cargaHoraria: number;
  ementa: string;
  preRequisitos?: DisciplinaDocument[];
  coRequisito?: DisciplinaDocument;
};

type DisciplinaInput = {
  codDisciplina: DisciplinaDocument['codDisciplina'];
  nome: DisciplinaDocument['nome'];
  cargaHoraria: DisciplinaDocument['cargaHoraria'];
  ementa: DisciplinaDocument['ementa'];
  preRequisitos?: DisciplinaDocument[];
  coRequisito?: DisciplinaDocument;
};

const DisciplinaSchema = new Schema<DisciplinaDocument>({
  codDisciplina: { type: String, required: true },
  nome: { type: String, required: true },
  cargaHoraria: { type: Number, required: true },
  ementa: { type: String, required: true },
  preRequisitos: [{ type: Schema.Types.ObjectId, ref: 'Disciplina' }],
  coRequisito: { type: Schema.Types.ObjectId, ref: 'Disciplina' },
});

const Disciplina: Model<DisciplinaDocument> = mongoose.model('Disciplina', DisciplinaSchema);

export { Disciplina, DisciplinaInput, DisciplinaDocument };
