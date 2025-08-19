import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

import connectDB from "./config/db";
import { authRoutes } from "./routes/authRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

export const handler = serverless(app);
