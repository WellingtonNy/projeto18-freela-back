import { Router } from "express"
import { getHotel } from "../controllers/hotel.controllers.js"

const hotelRouter = Router()

hotelRouter.get("/hotel/:cidade", getHotel)


export default hotelRouter;