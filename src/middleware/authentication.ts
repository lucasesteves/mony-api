import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import endpoint from '../config/auth';

export const checkJwt = (req: Request,res: Response, next:NextFunction)=>{
    let auth =  req.headers.authorization;
    if (!auth) {
        return res.status(401).send({ auth: false, message: 'Token não encontrado!' });
    }
    jwt.verify(auth, endpoint.secret, async (err) =>{
        if(err){
        return res.status(401).send({ message : 'Autenticação não é valida!'});
        }
        next();
    });
}


