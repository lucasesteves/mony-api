import { Document,Schema, model } from 'mongoose';

interface IGain extends Document {
    userId:string,
    name:string,
    value:string,
    month:string,
    year:string
}

const GainSchema=new Schema({
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
    collection: 'gain'
})


export default model<IGain>('Gain',GainSchema)