import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './databaseConnection';
import { gradeRoute } from './routes/grade.route';
import { disciplinaRoute } from './routes/disciplina.route';
import { periodoRoute } from './routes/periodo.route';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', gradeRoute());
app.use('/', disciplinaRoute());
app.use('/', periodoRoute());

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
