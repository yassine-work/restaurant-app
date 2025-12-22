import express from "express"
import {createReservation} from "../controllers/reservationController"



const router=express.Router()
router.post("/create",createReservation)

export  default  router
