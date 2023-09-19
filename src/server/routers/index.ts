import { Router } from "express";
import * as rotasController from "../controllers/testeController";


const router = Router();

router.get("/teste",rotasController.teste);
router.post("/testepost",rotasController.testePost);



export default router;