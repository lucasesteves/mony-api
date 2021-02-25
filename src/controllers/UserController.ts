import { Request, Response } from 'express'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../model/User';
import auth from '../config/auth';


interface ICredencial {
    _id?:string,
    name:string,
    email?:string,
    password:string
}

export default {
    async getUser(req: Request,res: Response){
        const id : string = req.params.id
        const user = await User.find(mongoose.Types.ObjectId(id)).lean();
        return res.status(200).send(user);
    },

    async create(req:Request,res:Response){
        try {
            let { name, email, password } : ICredencial = req.body;
            const verifyUser = await User.find({ email : email});
            if (verifyUser.length>0) { return res.status(404).send({message : 'Email já cadastrado no sistema' , user : false})};
            const crypto:string = await bcrypt.hash(password, 8);
            const user = await User.create({
                    name,
                    email,
                    password:crypto,
            });
            if(user) { 
                const token = jwt.sign({ id : user._id }, auth.secret, {
                    expiresIn: '12h'
                });
                user.password = null;
                return res.status(200).send({ user  , token  }) 
            };
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },
    
    async login(req:Request,res:Response) {
        try {
            const { email, password } : ICredencial = req.body;
            const user = await User.findOne({email : email});
            if(!user){ 
                return res.status(404).send({ message : 'Esse e-mail não existe', user : false}) 
            }
            const verifyPassword = bcrypt.compareSync(password, user.password)
            if(!verifyPassword){
                return res.status(403).send({ message : 'Senha ou Email estão errados', user : false})
            } 
            const token = jwt.sign({ id : user._id }, auth.secret, {
                expiresIn: '12h'
            });
            const credential = {
                id:user._id,
                name:user.name,
                email:user.email
            }
            return res.status(200).send({ user:credential, token });
        }catch(err) {
            return res.status(500).send(err.message);
        }
    },

    

};