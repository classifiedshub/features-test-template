/* IMPORT DEPENDENCIES */
import path from "path";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";

/* IMPORT DATABASE CONFIG */
import connectDB from "./server/config/db.js";

/* IMPORT ROUTES */

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
dotenv.config();

const PORT = process.env.PORT || 5001;
connectDB();



/* SERVER CONNECTION */
app.listen(PORT, () => console.log(`Server Port: ${PORT} Connected`));
