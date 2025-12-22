import express  from "express";
import reservationRoutes from "./routes/reservationRoutes.js";
import {errorHandler} from "./middleware/errorHandler.js"


const app=express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/reservations",reservationRoutes);

app.use(errorHandler);

export default app;