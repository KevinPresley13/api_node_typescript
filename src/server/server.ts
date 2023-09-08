import express, { Request, Response } from "express";


const server = express();



server.get("/ping", (req: Request, res: Response)=>{
    return res.send({resposta: "pong"});
});

export {server};