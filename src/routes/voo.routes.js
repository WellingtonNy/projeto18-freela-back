import { Router } from "express"


import { getVoo } from "../controllers/voo.controllers.js";

const vooRouter = Router()

vooRouter.get("/voo", getVoo)


export default vooRouter;
