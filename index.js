import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.listen(process.env.PORT, () => {
    console.log("PORT listening to -> ", process.env.PORT);
})

app.use("/api/users", userRoutes);
