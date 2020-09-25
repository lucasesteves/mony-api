import { Request, Response } from 'express'
import Loss from '../model/Loss';
import Gain from '../model/Gain';


interface ISelect{
    userId:string,
    month:string,
    year:string
}

export default {
    async getDifference(req: Request,res: Response){
        try{
            const { userId, month, year } : ISelect = req.body
            let totalLoss = 0
            let totalWin = 0
            const listLoss = await Loss.find({userId:userId, month:month,year:year}).lean();
            console.log(listLoss)
            listLoss.length>0 && listLoss.map(e=>{
                totalLoss += parseFloat(e.value)
            })
            const listWin = await Gain.find({userId:userId, month:month,year:year}).lean();
            listWin.length>0 && listWin.map(e=>{
                totalWin += parseFloat(e.value)
            })

            const diff = totalWin - totalLoss
            
            return res.status(200).send({totalWin:totalWin, totalLoss:totalLoss, diff:diff});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },

};