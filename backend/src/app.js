import express  from "express";
import reservationRoutes from "./routes/reservationRoutes.js";


const app=express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/reservations",reservationRoutes);

export default app;