import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
