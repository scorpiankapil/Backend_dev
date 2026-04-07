import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import libraryRoutes from "./routes/library.routes.js";

dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Route definitions
app.use("/api/auth", authRoutes);
app.use("/api", libraryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
