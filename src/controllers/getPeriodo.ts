export async function getPeriodo(req, res) {
    try {
        const { db } = req.app;

        const { idGrade, idPeriodo } = req.params;
        
        if(!idGrade){
            return res.status(400).json({messaage: "Id da grade não informado"});
        }

        if(!idPeriodo){
            return res.status(400).json({messaage: "Id do período não informado"});
        }

        if(idPeriodo && parseInt(idPeriodo) < 1 || parseInt(idPeriodo) >= 9){
            return res.status(400).json({messaage: "Id do período não inválido. Valores válidos são de 1 a 9"});
        }

        const grade = await db.collection('grades').findOne({
            idGrade: idGrade,
        });

        const result = await db.collection('periodos').findOne({
            idPeriodo: parseInt(idPeriodo),
            grade_id: new Object(grade._id),
        });
        
        if(!result){
            return res.status(404).json({message: "Período não encontrado"});
        }

        res.status(200).json({
            message: "Periodo encontrado",
            quantidadeDisciplinas: result.disciplinas.length,
            periodo: result
        });
    } catch (error) {
        res.status(500).json(error);
    }
}