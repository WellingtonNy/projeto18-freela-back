import { Router } from "express";
import { getCidades } from "../controllers/cidades.controllers.js";



const cidadesRouter = Router()

cidadesRouter.get ("/cidades", getCidades)




export default cidadesRouter;