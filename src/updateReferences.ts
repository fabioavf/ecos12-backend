import { MongoClient, ObjectId } from 'mongodb';

const dbName = 'unifei';

export async function updateReferences(client) {
  try {
    const db = client.db(dbName);
    const periodosCollection = db.collection('periodos');
    const gradesCollection = db.collection('grades');
    const disciplinasCollection = db.collection('disciplinas');
    const cursosCollection = db.collection('cursos');

    // Obtenha o ID do documento de grades que deseja referenciar
    const curso = await cursosCollection.findOne({ idCurso: 'ECO' });
    if (!curso) {
      throw new Error('Curso não encontrado');
    }

    const grade = await gradesCollection.findOne({ idGrade: 'eco2015' });
    if (!grade) {
      throw new Error('Grade não encontrada');
    }

    const cursoId = curso._id;
    const gradeID = grade._id;

    // Atualize os documentos na coleção periodos para adicionar a referência
    let updateResult = await gradesCollection.updateMany(
      {}, // Critério para selecionar os documentos
      { $set: { curso_id: cursoId } },
    );

    updateResult = await periodosCollection.updateMany(
      {}, // Critério para selecionar os documentos
      { $set: { grade_id: gradeID } },
    );

    updateResult = await disciplinasCollection.updateMany(
      {}, // Critério para selecionar os documentos
      { $set: { curso_id: cursoId } },
    );

    if (updateResult.modifiedCount !== 0) {
      console.log(`Documentos atualizados: ${updateResult.modifiedCount}`);
    }
  } catch (error) {
    console.error(error);
  }
}
