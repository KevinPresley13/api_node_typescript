import { Router } from "express";
import * as TesteController from "../controllers/testeController";


const router = Router();


router.get("/home",TesteController.home);

export default router;