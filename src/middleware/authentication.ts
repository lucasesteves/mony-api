import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import endpoint from '../config/auth';

export const checkJwt = (req: Request,res: Response, next:NextFunction)=>{
    const auth = req.headers["authorization"] ;
    if (!auth) {
        return res.status(401).send({ deny: true, message: 'Token não encontrado!' });
    }
    jwt.verify(auth, endpoint.secret, (err) =>{
        if(err){
            return res.status(403).send({ deny:true, message : 'Token inválido!'});
        }
        next();
    });
}


