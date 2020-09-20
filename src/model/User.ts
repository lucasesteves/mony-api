import { Document,Schema, model } from 'mongoose';

interface IUser extends Document {
    name:string,
    email:string,
    password:string
}

const UserSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },   
},{
    timestamps: true,
    collection: 'user'
})


export default model<IUser>('User',UserSchema)