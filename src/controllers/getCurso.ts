export async function getCurso(req, res) {
    try {
        const { db } = req.app;

        const { idCurso } = req.params;

        if(!idCurso){
            return res.status(400).json({messaage: "Id do curso não informado"});
        }
        
        const result = await db.collection('cursos').findOne({
            idCurso: idCurso,
        });

        res.status(200).json({
            message: "Curso encontrado",
            curso: result
        });
    } catch (error) {
        res.status(500).json(error);
    }
}