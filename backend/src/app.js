import express  from "express";
import reservationRoutes from "./routes/reservationRoutes.js";
import {errorHandler} from "./middleware/errorHandler.js"
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";




const app=express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});
// @ts-ignore
app.use(limiter);


app.use("/reservations",reservationRoutes);

app.use(errorHandler);

export default app;