export async function getGrade(req, res) {
    try {
        const { db } = req.app;

        const { idGrade } = req.params;

        if(!idGrade){
            return res.status(400).json({messaage: "Id da grade não informado"});
        }
        
        const result = await db.collection('grades').findOne({
            idGrade: idGrade,
        });

        res.status(200).json({
            message: "Grade encontrada",
            grade: result
        });
    } catch (error) {
        res.status(500).json(error);
    }
}