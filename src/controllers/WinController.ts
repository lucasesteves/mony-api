import { Request, Response } from 'express'
import Gain from '../model/Gain';

interface IWin {
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
    async getAllGain(req: Request,res: Response){
        const { month, year } : ISelect = req.body

        const list = await Gain.find({month:month,year:year}).lean();
        return res.status(200).send(list);
    },

    async save(req:Request,res:Response){
        try {
            let { userId, name, value, month, year } : IWin = req.body;
            const gain = await Gain.create({
                    userId,
                    name,
                    value,
                    month,
                    year
            });
            
            return res.status(200).send({message:'Conteúdo salvo!',gain}) 
            
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
    
    async remove(req:Request,res:Response) {
        try {
            const { id } : any = req.params;
            const gain = await Gain.deleteOne({'_id' : id});
            if(!gain) { return res.status(200).send({message:'Conteúdo não encontrado!'})};
            return res.status(200).send({message:'Conteúdo excluido!'});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
};