import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import endpoint from '../config/auth';

export const checkJwt = (req: Request,res: Response, next:NextFunction)=>{
    const auth = req.headers["authorization"] ;
    if (!auth) {
        return res.status(401).send({ auth: false, message: 'Token não encontrado!' });
    }
    jwt.verify(auth, endpoint.secret, (err) =>{
        if(err){
            return res.status(403).send({ auth:false, message : 'Token inválido!'});
        }
        next();
    });
}


