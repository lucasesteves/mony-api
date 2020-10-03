import { Request, Response } from 'express'
import Loss from '../model/Loss';

interface ILoss {
    userId:string,
    name:string,
    value:string,
    month:string,
    year:string
}

interface ISelect{
    userId:string,
    month:string,
    year:string
}

export default {
    async getAllLoss(req: Request,res: Response){
        try{
            const { userId, month, year } : ISelect = req.body
    
            const list = await Loss.find({userId:userId, month:month,year:year}).lean();
            return res.status(200).send(list);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },

    async sumOfLoss(req: Request,res: Response){
        try {
            const { userId, month, year } : ISelect = req.body
            let total = 0
            const list = await Loss.find({userId:userId, month:month,year:year}).lean();
            list.map(e=>{
                total += parseFloat(e.value)
            })
            return res.status(200).send({total:total});
        }catch(err) {
            return res.status(500).send(err.message);
        }
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
            const  id : string = req.params.id;
            const loss = await Loss.deleteOne({'_id' : id});
            if(!loss) { return res.status(200).send({message:'Conteúdo não encontrado!'})};
            return res.status(200).send({message:'Conteúdo excluido!'});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
};