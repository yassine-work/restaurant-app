import Reservation   from "../models/Reservation.js";
import  Joi from "joi"

const reservationSchema=Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\d{8,15}$/).required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    guest: Joi.number().integer().min(1).max(20).required(),
    message: Joi.string().allow("").optional(),
})

export  const createReservation = async (req, res) => {
    try{
        const {error,value}=reservationSchema.validate(req.body)
        if(error){
            return res.status(400).send({
                error:error.details[0].message,
            })
        }
        //Create transaction
        const reservation = await Reservation.create({
            ...value
        })
        res.status(201).json({message:"reservation created",reservation})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error:"server error",
        })
    }

}