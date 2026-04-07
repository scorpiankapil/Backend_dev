import mongoose from "mongoose";

// Schema for library members
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    membershipType: {
        type: String,
        enum: ["Normal", "Gold"],
        default: "Normal"
    }
}, { timestamps: true });

export const Member = mongoose.model("Member", memberSchema);
