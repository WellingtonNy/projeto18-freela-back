import joi from "joi"

export const vooHotel = joi.object({
    cidade: joi.string().max(30).required()
    })
    
