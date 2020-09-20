import { Request, Response } from 'express'
import Loss from '../model/Gain';

interface ILoss {
    userId:string,
    name:string,
    value:string,
    month:string,
    year:string
}

interface ISelect{
    month:string,
    year:string
}

export default {
    async getAllLoss(req: Request,res: Response){
        const { month, year } : ISelect = req.body

        const list = await Loss.find({month:month,year:year}).lean();
        return res.status(200).send(list);
    },

    async save(req:Request,res:Response){
        try {
            let { userId, name, value, month, year } : ILoss = req.body;
            const loss = await Loss.create({
                    userId,
                    name,
                    value,
                    month,
                    year
            });
            
            return res.status(200).send({message:'Conteúdo salvo!',loss}) 
            
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
    
    async remove(req:Request,res:Response) {
        try {
            const { id } : any = req.params;
            const loss = await Loss.deleteOne({'_id' : id});
            if(!loss) { return res.status(200).send({message:'Conteúdo não encontrado!'})};
            return res.status(200).send({message:'Conteúdo excluido!'});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
};