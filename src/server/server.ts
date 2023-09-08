import express, { Request, Response } from "express";
import testeController from "../routers/index";

const server = express();

server.use(testeController);

server.get("/ping", (req: Request, res: Response)=>{
    return res.send({resposta: "pong"});
});
server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({erro:"pagina nao encontrada"});
});
export {server};