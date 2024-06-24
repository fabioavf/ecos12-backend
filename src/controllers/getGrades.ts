export async function getGrades(req, res) {
  try {
    const { db } = req.app;

    const result = await db.collection('grades').find().toArray();

    res.status(200).json({
      message: 'Grade encontrada',
      grades: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
