import { Router } from "express";

import asyncHandler from 'express-async-handler';
import { ResultsModel } from "../models/results.model";
import { times } from "../results";

const router = Router();

router.get('/seed',asyncHandler (
    async (req,res) => {
        const resultsCount = await ResultsModel.countDocuments();
        if(resultsCount > 0) {
         res.send('Seed is already done')
         return
        }
        await ResultsModel.create(times);
        res.send('seed is done')
     }
 ))

 router.get('/all-results', asyncHandler(
    async (req,res)=>{
        ResultsModel.find().then((result)=>{
         res.send(result);
        }).catch((err)=> {
            console.log(err)
        })
    }
 ))

 export default router;