import { Request, Response } from "express";


export const teste = (req:Request, res:Response)=>{
    res.json({connection: "true"});
};

export const testePost = (req:Request, res:Response)=>{
    res.json(req.body);
};