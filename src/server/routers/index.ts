import { Router } from "express";
import * as rotasController from "../controllers/testeController";
import { cidadesControler } from "./../controllers";


const router = Router();

router.get("/teste",rotasController.teste);
router.post("/testepost",rotasController.testePost);

router.post("/newcit", cidadesControler.creatBodyValidator, cidadesControler.create);

export default router;