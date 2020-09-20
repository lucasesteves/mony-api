import { Document,Schema, model } from 'mongoose';

interface ILoss extends Document {
    userId:string,
    name:string,
    value:string,
    month:string,
    year:string
}

const LossSchema=new Schema({
    userId:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    value:{
        type:String,
        require:true
    },
    month:{
        type:String,
        require:true
    },   
    year:{
        type:String,
        require:true
    },   
},{
    timestamps: true,
    collection: 'loss'
})


export default model<ILoss>('Loss',LossSchema)