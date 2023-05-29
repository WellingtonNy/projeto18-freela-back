import { Router } from "express"
import cidadesRouter from "./cidades.routes.js"
import hotelRouter from "./hotel.routes.js"
import vooRouter from "./voo.routes.js"



const router = Router()
router.use(hotelRouter)
router.use(cidadesRouter)
router.use(vooRouter)


export default router