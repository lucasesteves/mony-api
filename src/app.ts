import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import { router } from './routes'
import cors from 'cors';
import endpoint from './config/config';
import mongoose from 'mongoose';

const app = express()
app.use(cors());

mongoose.connect(endpoint.DB_URL,{ useNewUrlParser: true })
.then(()=>app.listen(endpoint.PORT,()=>{console.log('Server running at port '+endpoint.PORT)}))
.catch((err) => {
    console.error(err)
    process.exit(1);
})
    
app.use(express.json())
app.use(router)
