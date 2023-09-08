import express, { Request, Response } from "express";
import testeController from "../routers/index";

const server = express();

server.use(testeController);

server.get("/ping", (req: Request, res: Response)=>{
    return res.send({resposta: "pong"});
});

export {server};