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
    userId:string,
    month:string,
    year:string
}

export default {
    async getAllGain(req: Request,res: Response){
        try{
            const { userId, month, year } : ISelect = req.body
    
            const list = await Gain.find({userId:userId, month:month,year:year},{name:1, value:1}).lean();
            return res.status(200).send(list);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },

    async sumOfWins(req: Request,res: Response){
        try {
            const { userId, month, year } : ISelect = req.body
            let total = 0
            const list = await Gain.find({userId:userId, month:month,year:year}).lean();
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
            const id : string = req.params.id;
            const gain = await Gain.deleteOne({'_id' : id});
            if(!gain) { return res.sendStatus(200).send({message:'Conteúdo não encontrado!'})};
            return res.status(200).send({message:'Conteúdo excluido!'});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
};