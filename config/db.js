import mongoose from "mongoose";

// Function to establish MongoDB connection
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }
};
