import { Router } from "express"


import { getVoo } from "../controllers/voo.controllers.js";

const vooRouter = Router()

vooRouter.get("/voo/:cidade", getVoo)


export default vooRouter;
