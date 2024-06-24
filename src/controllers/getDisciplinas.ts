export async function getDisciplinas(req, res) {
    try {
        const { db } = req.app;
        
        const { codDisciplina } = req.params;

        if(!codDisciplina){
            return res.status(400).json({messaage: "Codigo da disciplina não informado"});
        }
        
        const result = await db.collection('disciplinas').findOne({
            codDisciplina: codDisciplina,
        });

        res.status(200).json({
            message: "Disciplina encontrada",
            disciplina: result
        });
    } catch (error) {
        res.status(500).json(error);
    }
}