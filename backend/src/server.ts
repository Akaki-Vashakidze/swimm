import express from 'express';
import cors from 'cors';
import { EVENTS } from './data';
import dotenv from 'dotenv';
dotenv.config();

import { dbConnect } from './configs/database.config';
dbConnect();

import { Router } from 'express';
import { times } from './results';
import { ResultsModel } from './models/results.model';
import resultsRouter from './routers/results.router'

const router = Router()

const app = express();
    


app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

app.use('/api/data/',resultsRouter);

app.get('/api/events',(req,res) => {
    res.send(EVENTS);
})

app.get('/api/hi',(req,res) => {
    res.send('hi');
})

const port = 3500;
app.listen(port,()=> {
    console.log('Website served on http://localhost:' + port)
})